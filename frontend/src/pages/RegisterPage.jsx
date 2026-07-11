import { Link } from "react-router";
import { useState } from "react";
import { RegisterUser } from "../api/RegisterUserApi";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Software Engineer",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const onchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = async () => {
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.role ||
      !confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Enter Valid Email");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (formData.name.length < 1) {
      setError("Valid Username required");
      return;
    }
    try {
      await RegisterUser(formData);
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data || error.message);
      setError(error.response?.data?.error || "Registration Failed!");
    }
  };

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-r from-slate-950 to-sky-800 py-8">
        <div className="mb-8 flex items-center gap-4">
          <img
            src="/prodsight_logo.png"
            alt="ProdSight logo"
            className="h-20 w-20 object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">ProdSight</h1>
            <p className="font-semibold text-gray-400">Analytics Platform</p>
          </div>
        </div>

        <div className=" p-6 border  rounded-3xl bg-black/30 shadow-2xl min-w-1/4">
          <h1 className="text-white font-bold text-xl">Create your account</h1>
          <h1 className="text-gray-400 font-light text-xs">
            Get Started with Prodsight today
          </h1>
          {error && (
            <div className="p-1 mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-y-5 p-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-gray-400 ">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Kalana Ashen"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  onchange(e);
                }}
                className="border text-white font-medium  bg-gray-700 border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="role" className="text-gray-400">
                Job Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={onchange}
                className="border border-gray-400 rounded-lg bg-gray-700 py-2 text-white outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
              >
                <option>Software Engineer</option>
                <option>Designer</option>
                <option>Project Manager</option>
                <option>QA Engineer</option>
                <option>Human Resources</option>
                <option>Employee</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-gray-400">
                Email
              </label>
              <input
                type="text"
                placeholder="you@company.com"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  onchange(e);
                }}
                className="  border text-white font-medium bg-gray-700 border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => {
                  onchange(e);
                }}
                className="  border text-white font-medium bg-gray-700 border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor=" " className="text-gray-400">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" border text-white font-medium bg-gray-700 border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>
          </div>

          <div className="mb-4">
            <button
              className="w-full py-2 rounded-2xl font-bold bg-linear-to-r from-blue-500 to-blue-4800 text-white hover:bg-black/50 hover:scale-105 duration-200"
              onClick={registerUser}
            >
              Create Account
            </button>
          </div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="font-light text-gray-100">
              Already have an account?
            </h1>
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
