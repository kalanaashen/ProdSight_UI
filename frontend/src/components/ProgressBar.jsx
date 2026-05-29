import React from "react";

export default function ProgressBar({ progress, title }) {
  const clampProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-3/4">
      <div className="flex justify-between ">
        <span className="text-sm font-medium text-slate-700 dark:text-white my-2">
          {title}
        </span>
        <span className="text-sm font-medium text-slate-700 dark:text-white">
          {clampProgress}%
        </span>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-1.5 dark:bg-slate-700 overflow-hidden my-3">
        <div
          className="bg-slate-600 h-1.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampProgress}%` }}
        />
      </div>
    </div>
  );
}
