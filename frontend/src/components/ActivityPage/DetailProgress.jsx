import React from "react";
import ProgressBar from "../ProgressBar";
export const DetailProgress = ({ title, progress }) => {
  return (
    <div>
      <div className="flex flex-col bg-black/40 border ">
        <h1 className="font-semibold text-white">{title}</h1>
        <ProgressBar  progress={progress}  />
      </div>
    </div>
  );
};
