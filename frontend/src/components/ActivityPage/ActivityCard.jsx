import React from "react";

export const ActivityCard = ({ id, title, icon, subtitle }) => {
  return (
    <div className="bg-black/30 border border-gray-700 rounded-3xl py-10 px-10 ">
      <div className="flex  flex-row gap-2">
        {" "}
        <div className="text-white">{icon}</div>
        <div className="flex flex-col  ">
          <h1 className="font-light text-md text-gray-500">{title}</h1>
        </div>
      </div>
      <h1 className="font-medium text-xl text-white">{subtitle}</h1>
    </div>
  );
};
