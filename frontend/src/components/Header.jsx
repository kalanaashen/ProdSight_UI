import React from "react";

export const Header = () => {
  return (
    <div className="bg-slate-800 w-full p-4">
      <div  className="flex flex-row justify-between">
        <div className="flex flex-row justify-baseline gap-5">
          <input
            type="text"
            placeholder="Search Employee"
            className=" border border-slate-400 outline-none hover:ring hover:ring-blue-400 rounded-2xl text-white py-1 px-4"
          />
          <button className="bg-slate-700 text-white font-bold hover:bg-slate-600 hover:scale-105 rounded-2xl py-1 px-5">
            Search
          </button>
        </div>
        <div className="flex flex-row gap-1.5">
          <div>
            <h1 className=" flex items-center justify-center font-bold text-white bg-blue-500 rounded-full h-10 w-10 ">
              K
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-white">Kalana Ashen</h1>
            <h1 className="font-semibold text-gray-500">Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
