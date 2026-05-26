import React from "react";
import { Link } from "react-router";

export const RegisterPage = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center bg-linear-to-r from-slate-950 to-sky-800 h-screen ">
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
          <div className=" flex flex-col p-3 gap-y-8 ">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-400 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Kalana Ashen"
                className="border text-white font-medium  border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-400">
                Email
              </label>
              <input
                type="text"
                placeholder="you@company.com"
                className="  border text-white font-medium border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-400">
                Password
              </label>
              <input
                type="password"
                className="  border text-white font-medium border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor=" " className="text-gray-400">
                Confirm Password
              </label>
              <input
                type="password"
                className=" border text-white font-medium border-gray-400 py-2 outline-none rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
              />
            </div>
          </div>

          <div className="mb-4">
            <button className="w-full py-2 rounded-2xl font-bold bg-linear-to-r from-blue-500 to-blue-4800 text-white hover:bg-black/50 hover:scale-105 duration-200">
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
