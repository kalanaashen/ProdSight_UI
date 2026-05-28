import React from "react";
import { ActiveTime } from "./ActiveTime";
const activetimedata = [
  {
    id: 1,
    app: "VSCODE",
    time: "20.00",
    duration: "-",
    status: "productive",
    mouseclicks: "1",
    keyboardstrokes: "2",
  },
];
export const ActiveTimeLine = () => {
  return (
    <div>
      <div className="border bg-black/40 border-gray-400 rounded-2xl w-full ">
        <h1 className="text-md text-white ">Activity Timeline</h1>
        <h1>Today</h1>
        <div>
          {activetimedata.map((data) => (
            <ActiveTime
              app={data.app}
              time={data.time}
              duration={data.duration}
              status={data.status}
              mouseclicks={data.mouseclicks}
              keyboardstrokes={data.keyboardstrokes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
