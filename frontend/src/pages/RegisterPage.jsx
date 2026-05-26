import React from "react";

export const RegisterPage = () => {
  return (
    <div>
      <div className="bg-linear-to-b from-blue-950 to-blue-800 h-screen">
        <h1 className="font-bold text-2xl">ProdSight</h1>
        <h1 className="font-semibold">Analyitcs Platform</h1>
        <div className="border border-white  bg-black/40 shadow-2xl">
          <h1>Create your account</h1>
          <h1>Get Started with Prodsight today</h1>
          <div>
            <div className="flex flex-col">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Kalana Ashen" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="you@company.com" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Confirm Password</label>
              <input type="password" />
            </div>
          </div>

          <div>
            <button className="w-full font-bold  text-white">
              Create Account
            </button>
          </div>
          <div className="flex flex-row">
            <h1 className="font-light">Already have an account?</h1>
            <button className="text-blue-600">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};
