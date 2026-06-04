import React from "react";

export const ActiveCard = ({ title, value, subvalue }) => {
  return (
    <div>
      <div className="border border-gray-600 rounded-2xl bg-black/20 p-6 w-54 h-32 flex flex-col justify-between">
        <h1 className=" text-md text-gray-400">{title}</h1>
        <p className="font-bold text-2xl text-white">{value}</p>
        <h1 className=" text-sm text-green-500">{subvalue}</h1>
      </div>
    </div>
  );
};
