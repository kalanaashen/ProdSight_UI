import React from "react";
import ProgressBar from "../ProgressBar";

export const CurrentSession = () => {
  return (
    <div className="border border-slate-700 bg-black/40 p-4 rounded-2xl my-2">
      <h1 className="text-white text-md">Current Session Metrics</h1>

      <div className="grid grid-cols-2 p-4">
        <div>
          <ProgressBar title={"Active Time"}/>
        </div>

        <div>
          <ProgressBar title={"Keyboard Activity"}/>
        </div>

        <div>
          <ProgressBar title={"Idle Time"}/>
        </div>

        <div>
          <ProgressBar title={"Mouse Activity"}/>
        </div>
      </div>
    </div>
  );
};
