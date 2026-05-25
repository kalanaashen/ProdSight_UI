import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-gradient-to-t from-blue-400  to-slate-900   items-center  justify-center p-6">
          <div>
            <h1 className="font-bold text-white text-3xl ">ProdSight</h1>
            <h1 className="font-light text-white">Analyitical Platform</h1>
          </div>
          <div className="border border-white  bg-black/30 rounded-2xl p-5 mt-5">
            <div
              className="
            flex flex-col gap-x-1"
            >
              <h1
                className="
            font-bold text-xl text-white"
              >
                Welcome Back
              </h1>
              <h1 className="font-semibold text-sm text-gray-500">
                Sign into Your Account
              </h1>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-gray-400 ">
                UserName
              </label>
              <input
                type="text"
                className="p-1.5 rounded-lg border border-white/70"
                placeholder="Joe"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-gray-400" placeholder="******">
                Password
              </label>

              <input
                type="password"
                className="p-1.5 rounded-lg border  text-gray-600 border-white/70 "
              />
            </div>

            <div className="mt-6">
              <button className="py-2 w-full   text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 duration-200">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="bg-green-500">
          <h1>hello world</h1>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
