import React from "react";
import { Keyboard, Mouse } from "lucide-react";
export const ActiveTime = ({
  app,
  time,
  duration,
  status,
  mouseclicks,
  keyboardstrokes,
  title,
}) => {
  return (
    <div>
      <div className="w-full  bg-black/10 rounded-3xl p-5 hover:bg-black/30 my-1">
        <div className="flex flex-row gap-15">
          <div className="flex flex-col pl-4.5">
            <h1 className="text-gray-300 font-medium ">{time}</h1>
            <h1 className="text-gray-300 font-light">{duration}</h1>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-row items-baseline gap-x-2 w-full">
              <div
                className={`h-2.5 w-2.5 rounded-full ${status === "productive" ? "bg-green-400" : status === "unproductive" ? "bg-red-400" : "bg-gray-500"}`}
              ></div>
              <div className="flex flex-1 items-baseline justify-between gap-x-4">
                <h1 className="text-white font-semibold text-md">{app}</h1>
                <h1
                  className={`rounded-2xl border p-1.5 text-xs ${status === "productive" ? " text-green-400 border-green-800" : status === "unproductive" ? " text-red-400 border-red-800" : " text-yellow-400 border-yellow-800"}`}
                >
                  {status}
                </h1>
              </div>
            </div>

            <h1 className="text-gray-300 text-sm font-medium">{title}</h1>
            <div className="flex flex-row gap-x-2.5 items-baseline">
              <div>
                <Keyboard size={15} className="text-gray-400" />
              </div>
              <h1 className="text-gray-400">{keyboardstrokes} keys</h1>
              <div>
                <Mouse size={15} className="text-gray-400" />
              </div>
              <h1 className="text-gray-400">{mouseclicks} clicks</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
