import React from "react";
import { Keyboard, Mouse } from "lucide-react";
import ProgressBar from "../../components/ProgressBar";
import { ar } from "zod/locales";
export const InputActivity = ({ strokes, clicks, idletime }) => {
  const calProgress = (strokes, clicks) => {
    const maxStrokes = 20000;
    const maxCliks = 30000;

    const strokeProgress = Math.min((strokes / maxStrokes) * 100, 100);
    const clickProgress = Math.min((clicks / maxCliks) * 100, 100);

    const array = [strokeProgress, clickProgress];
    return array;
  };

  return (
    <div>
      <div className="border border-slate-700 rounded-2xl max-w-xl bg-slate-900 p-6">
        <h1 className="text-white font-semibold my-1.5">Input activity</h1>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Keyboard className="text-purple-400 mx-3.5" />
              <h1 className="text-gray-300 font-medium"> KeyBoard Strokes</h1>
              <h1>{strokes}</h1>
            </div>
            <div>
              <ProgressBar progress={calProgress(strokes, clicks)[1]} />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <Mouse className="text-cyan-400 mx-3.5" />
              <h1 className="text-gray-300 font-medium"> Mouse Clicks</h1>
              <h1>{clicks}</h1>
            </div>
            <div>
              <ProgressBar progress={calProgress(strokes, clicks)[0]} />
            </div>
          </div>
        </div>
        <div className="h-0.5 mt-6 bg-gray-500 w-full rounded-2xl"></div>
        <div className="flex flex-row justify-between">
          <h1 className="text-gray-400">Idle time</h1>
          <h1 className="text-green-400 font-bold">
            Threshold-{idletime ? idletime : "Unknown"}
          </h1>
        </div>
      </div>
    </div>
  );
};
