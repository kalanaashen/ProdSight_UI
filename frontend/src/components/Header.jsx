import React from "react";

export const Header = () => {
  return (
    <div className="bg-slate-800 w-full p-4">
      <div className="flex flex-row justify-baseline gap-5">
        <input
          type="text"
          placeholder="Search Employee"
          className=" border border-slate-400 outline-none hover:ring hover:ring-blue-400 rounded-2xl text-white p-4"
        />
        <button className="bg-slate-700 text-white font-bold hover:bg-slate-600 hover:scale-105 rounded-2xl py-1 px-5">
          Search
        </button>
      </div>
    </div>
  );
};
