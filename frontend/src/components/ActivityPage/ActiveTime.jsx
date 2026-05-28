import React from "react";
import { Keyboard, Mouse } from "lucide-react";
export const ActiveTime = ({
  app,
  time,
  duration,
  status,
  mouseclicks,
  keyboardstrokes,
}) => {
  return (
    <div>
      <div className="w-full bg-black/30">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1>{time}</h1>
            <h1>{duration}</h1>
          </div>
          <div className="flex flex-col">
            <h1>{app}</h1>
            <div className="flex flex-row gap-x-2">
              <h1 className="text-gray-400">
                <Keyboard />
                {keyboardstrokes}
              </h1>
              <h1 className="text-gray-400">
                <Mouse />
                {mouseclicks}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
