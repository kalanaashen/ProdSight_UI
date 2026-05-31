import React, { useState } from "react";
import { ActiveTime } from "./ActiveTime";
import { useEffect } from "react";
import { getActivites } from "../../api/activityApi";


export const ActiveTimeLine = () => {
  const [activeTimeData, setActiveTimeData] = useState([]);

  const getactivites = async () => {
    try {
      const res = await getActivites();
      setActiveTimeData(res);
      console.log(res);
      console.log(activeTimeData);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getactivites();
  }, []);

  const gettime=(timestamp)=>{
 

    const date=new Date(timestamp);

    return date.toLocaleTimeString();


  }
  return (
    <div>
      <div className="border bg-black/40 border-slate-700 rounded-2xl w-full h-screen">
        <h1 className="text-md text-white ml-1.5">Activity Timeline</h1>
        <h1 className="text-white ml-1.5 ">Today</h1>
        <div>
          {activeTimeData.map((data) => (
            <ActiveTime
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
