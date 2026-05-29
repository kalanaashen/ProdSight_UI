import React from "react";

export default function ProgressBar({ progress }) {
  
  const clampProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full">

      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-white">
          Task Progress
        </span>
        <span className="text-sm font-medium text-slate-700 dark:text-white">
          {clampProgress}%
        </span>
      </div>


      <div className="w-full bg-slate-200 rounded-full h-4 dark:bg-slate-700 overflow-hidden">

        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampProgress}%` }}
        />
      </div>
    </div>
  );
}
