import React from "react";

export const ActivityCard = ({ id, title, icon, subtitle }) => {
  return (
    <div className="bg-black/30 border border-gray-700 rounded-3xl py-8 px-20">
      <div className="flex flex-col">
        <div className="flex flex-row gap-3">
          {" "}
          <div className="text-white">{icon}</div>
          <div className="flex flex-col gap-1">
            <h1 className="font-light text-md text-gray-500">{title}</h1>
            <h1 className="font-medium text-xl text-white">{subtitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
