import React from "react";
import { Keyboard, Mouse } from "lucide-react";
import ProgressBar from "../../components/ProgressBar"
export const InputActivity = ({ strokes, clicks, idletime }) => {
  return (
    <div>
      <div className="border bg-black/40 p-4">
        <h1 className="text-white font-semibold">Input activity</h1>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Keyboard className="text-purple-400" />
            <h1 className="text-gray-400 font-medium"> KeyBoard Strokes</h1>
            <h1>{strokes}</h1>
          </div>
          <div className="flex flex-row">
            <Mouse className="text-cyan-400" />
            <h1 className="text-gray-400 font-medium"> Mouse Clicks</h1>
            <h1>{clicks}</h1>
          </div>
        </div>
        <div className="h-1 bg-gray-500 w-full rounded-2xl"></div>
        <div className="flex flex-row">
          <h1 className="text-gray-400">Idle time</h1>
          <h1>{idletime}</h1>
        </div>
      </div>
    </div>
  );
};
