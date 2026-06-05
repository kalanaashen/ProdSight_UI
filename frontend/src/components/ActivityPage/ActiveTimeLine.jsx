import { useState } from "react";
import { ActiveTime } from "./ActiveTime";
import { useEffect } from "react";
import { getActivites } from "../../api/activityApi";

export const ActiveTimeLine = ({ activities }) => {
  const [activeTimeData, setActiveTimeData] = useState([]);

  useEffect(() => {
    if (activities) {
      return;
    }

    let ignore = false;

    getActivites().then((res) => {
      if (!ignore) {
        setActiveTimeData(res);
      }
    });

    return () => {
      ignore = true;
    };
  }, [activities]);

  const displayedActivities = activities ?? activeTimeData;

  const gettime = (timestamp) => {
    const date = new Date(timestamp);

    return date.toLocaleTimeString();
  };

  const gettoday = () => {
    let today = new Date();
    return today.toISOString().split("T")[0];
  };
  return (
    <div>
      <div className="border bg-black/40 border-slate-700 rounded-2xl w-full h-screen">
        <div className="flex flex-row justify-between p-4">
          <h1 className="text-md text-white ml-1.5">Activity Timeline</h1>
          <h1 className="text-gray-400 font-medium">
            <span className="font-light px-4">Today</span> {gettoday()}{" "}
          </h1>
        </div>

        <div>
          {displayedActivities.map((data) => (
            <ActiveTime
              key={data.id ?? `${data.recordedAt}-${data.activeWindow}`}
              app={data.activeWindow}
              time={gettime(data.recordedAt)}
              title={data.title}
              duration={data.duration}
              status={data.category}
              mouseclicks={data.mouseClicks}
              keyboardstrokes={data.keystrokes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
