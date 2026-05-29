import React from "react";
import { ActiveTime } from "./ActiveTime";
const activetimedata = [
  {
    id: 1,
    app: "VSCODE",
    title: "app.jsx",
    time: "2.00 PM",
    duration: "45m",
    status: "productive",
    mouseclicks: "100",
    keyboardstrokes: "210",
  },
  {
    id: 1,
    app: "Youtube",
    title: "hello",
    time: "2.00 PM",
    duration: "45m",
    status: "unproductive",
    mouseclicks: "2100",
    keyboardstrokes: "1210",
  },
];
export const ActiveTimeLine = () => {
  return (
    <div>
      <div className="border bg-black/40 border-gray-400 rounded-2xl w-full h-screen">
        <h1 className="text-md text-white ">Activity Timeline</h1>
        <h1 className="text-white ">Today</h1>
        <div>
          {activetimedata.map((data) => (
            <ActiveTime
              app={data.app}
              time={data.time}
              title={data.title}
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
