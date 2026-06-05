import React from "react";
import { DetailProgress } from "./DetailProgress";
const activewindowsdata = [
  { id: 1, app: "vs code", duration: 80 },
  {
    id: 2,
    app: "slack",
    duration: 40,
  },
  {
    id: 3,
    app: "youtube",
    duration: 60,
  },
];
import ProgressBar from "../ProgressBar";
export const ActiveWindow = () => {
  return (
    <div>
      <div className="bg-slate-900 border border-slate-700 max-w-xl p-6 rounded-2xl">
        <h1 className="font-semibold text-white ">Most Active Windows</h1>

        <div>
          {activewindowsdata.map((data) => (
            <DetailProgress title={data.app} progress={data.duration} />
          ))}
        </div>
      </div>
    </div>
  );
};
