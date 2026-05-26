import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen ">
        <div className=" flex bg-gradient-to-t from-blue-900  to-slate-900   items-center  justify-center p-6 ">
          <div className="translate-y-10">
            <div className="">
              <h1 className="font-bold text-white text-3xl ">ProdSight</h1>
              <h1 className="font-light text-white">Analytical Platform</h1>
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

              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-gray-400 ">
                  Username
                </label>
                <input
                  type="text"
                  className="p-1.5 rounded-lg border border-gray-300 text-white bg-white/20 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
                  placeholder="Joe"
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
                />
              </div>

              <div className="mt-6">
                <button className="py-2 w-full font-bold  text-white  bg-gradient-to-r from-blue-400  to-blue-900  rounded-lg  hover:scale-105 duration-200">
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
