import React from "react";
import ProgressBar from "../ProgressBar";
export const DetailProgress = ({ title, progress }) => {
  return (
    <div>
      <div className="flex flex-col bg-black/30  rounded-2xl p-1 my-3">
        <h1 className=" text-white">{title}</h1>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};
