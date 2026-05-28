import React from "react";

export const ActivityCard = ({ image, title, subtitle }) => {
  return (
    <div className="bg-black/40 rounded-lg ">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">{title}</h1>
        <h1 className="font-medium text-lg">{subtitle}</h1>
      </div>
    </div>
  );
};
