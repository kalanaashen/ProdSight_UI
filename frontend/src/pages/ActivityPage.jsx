import React from "react";
import { ActivityCard } from "../components/ActivityPage/ActivityCard";
import { Monitor, Clock, Keyboard, Mouse, UserRoundSearch } from "lucide-react";
import { CurrentSession } from "../components/ActivityPage/CurrentSession";
import { ActiveTime } from "../components/ActivityPage/ActiveTime";
import { ActiveTimeLine } from "../components/ActivityPage/ActiveTimeLine";
import { InputActivity } from "../components/ActivityPage/InputActivity";
import { ActiveWindow } from "../components/ActivityPage/ActiveWindow";

import getTodayActivity from "../api/activityApi";
import { getActivites } from "../api/activityApi";
const activitydata = [
  {
    id: 1,
    name: "Active Window",
    data: "VS CODE",
    icon: <Monitor className="text-blue-700" />,
  },
  {
    id: 2,
    name: "Session Duration",
    data: "3h 45m",
    icon: <Clock className="text-green-700" />,
  },
  {
    id: 3,
    name: "Keyboard/Stroke",
    data: "45",
    icon: <Keyboard className="text-purple-700" />,
  },
  {
    id: 4,
    name: "Mouse Clicks",
    data: "10",
    icon: <Mouse className="text-yellow-700" />,
  },
];
const findDetails = async (username, date) => {
  try {
    const res = await getTodayActivity(username, date);

    console.log(res);
  } catch (error) {
    throw error;
  }
};

export const ActivityPage = () => {
  return (
    <div>
      <div className="bg-slate-800 ">
        <div className="flex flex-row  justify-between p-7">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">
              Activity Monitoring
            </h1>
            <h1 className="text-xm font-medium text-gray-400">
              Real-time employee activity tracking and session logs
            </h1>
          </div>
          <div className="flex flex-row items-baseline gap-4">
            <input
              type="text"
              className="border border-gray-300 py-2 px-1  rounded-xl text-white outline-none "
              placeholder="Username "
            />
            <UserRoundSearch className="text-green-300" size={40} />
          </div>
        </div>

        <div className="flex flex-row justify-around ">
          {activitydata.map((activity) => (
            <ActivityCard
              id={activity.id}
              icon={activity.icon}
              title={activity.name}
              subtitle={activity.data}
            />
          ))}
        </div>
        <div>
          <CurrentSession />
        </div>

        <div>
          <ActiveTimeLine />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 p-8 gap-8 ">
          <div className="">
            <ActiveWindow />
          </div>
          <div className="">
            <InputActivity />
          </div>
        </div>
      </div>
    </div>
  );
};
