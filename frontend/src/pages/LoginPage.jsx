import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { loginuser } from "../api/loginUserApi";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChangeLogin = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const login = async () => {
    setError("");

    if (!formData.email && !formData.password) {
      setError("Fill are required fields.");
      return;
    }
    if (formData.email.length < 1) {
      setError("Email field is required.");
      return;
    }
    if (formData.password.length < 1) {
      setError("Password field is required.");
      return;
    }
    try {
      const result = await loginuser(formData);
      const data = result?.data ?? result;
      const accessToken = typeof data === "string" ? data : (data?.accessToken ?? data?.token);
      const refreshToken = data?.refreshToken;

      if (accessToken) localStorage.setItem("accessToken", accessToken);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
      navigate("/activity");
    } catch (error) {
      const message = error.response?.data?.message ?? error.response?.data;
      setError(typeof message === "string" ? message : "Login failed. Please try again.");
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 h-screen ">
        <div className=" flex bg-gradient-to-t from-blue-900  to-slate-900   items-center  justify-center p-6 ">
          <div className="">
            <div className="flex items-center gap-4">
              <img
                src="/prodsight_logo.png"
                alt="ProdSight logo"
                className="h-20 w-20 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">ProdSight</h1>
                <p className="font-semibold text-gray-400">
                  Analytics Platform
                </p>
              </div>
            </div>
            <div className="shadow-2xl w-sm bg-black/30 rounded-2xl p-5 mt-10">
              <div
                className="
            flex flex-col  mb-5"
              >
                <h1
                  className="
            font-bold text-xl text-white"
                >
                  Welcome Back
                </h1>
                <h1 className="font-semibold text-sm text-gray-500">
                  Sign in to your account to continue
                </h1>
              </div>
              {error && (
                <div className="p-1.5 rounded text-red-600 bg-red-50">
                  {error}
                </div>
              )}
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-gray-400 ">
                  Email
                </label>
                <input
                  type="text"
                  className="p-1.5 rounded-lg border border-gray-300 text-white bg-white/20 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
                  placeholder="joe@example.com"
                  name="email"
                  value={formData.email}
                  onChange={(e) => onChangeLogin(e)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="text-gray-400"
                  placeholder="******"
                >
                  Password
                </label>

                <input
                  type="password"
                  className="p-1.5 rounded-lg border border-gray-300 text-white bg-white/20 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
                  name="password"
                  value={formData.password}
                  onChange={(e) => onChangeLogin(e)}
                />
              </div>

              <div className="mt-6">
                <button
                  className="py-2 w-full font-bold  text-white  bg-gradient-to-r from-blue-400  to-blue-900  rounded-lg  hover:scale-105 duration-200"
                  onClick={login}
                >
                  Login
                </button>
                <div className="flex justify-center">
                  <h1 className="text-gray-500 mt-2">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-400 hover:text-blue-700"
                    >
                      Sign Up
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500">
          <div className="h-screen">
            <div className="h-screen">
              <img
                src="/loginscreen.png"
                alt="loginscreen"
                className="h-screen w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
