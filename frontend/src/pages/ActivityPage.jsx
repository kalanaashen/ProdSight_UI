import { useState } from "react";
import { ActivityCard } from "../components/ActivityPage/ActivityCard";
import { Monitor, Clock, Keyboard, Mouse, UserRoundSearch } from "lucide-react";
import { CurrentSession } from "../components/ActivityPage/CurrentSession";
import { InputActivity } from "../components/ActivityPage/InputActivity";
import { ActiveWindow } from "../components/ActivityPage/ActiveWindow";
import { ActiveTimeLine } from "../components/ActivityPage/ActiveTimeLine";
import getTodayActivity from "../api/activityApi";
import { set } from "zod";
import { EmployeePage } from "./EmployeePage";

const testActivityDate = "2026-05-23T20:29:29.687Z";

export const ActivityPage = () => {
  const [username, setUsername] = useState("Kalana Ashen");
  const [searchedActivities, setSearchedActivities] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [totalDuration, setTotalDuration] = useState("");
  const [totalKeystrokes, setTotalKeystrokes] = useState("");
  const [totalMouseClicks, setTotalMouseClicks] = useState("");
  const [activeWindow, setActiveWindow] = useState("No App");
  const [idleSeconds, setIdleSeconds] = useState("");

  const activitydata = [
    {
      id: 1,
      name: "Active Window",
      data: activeWindow,
      icon: <Monitor className="text-blue-700" />,
    },
    {
      id: 2,
      name: "Session Duration",
      data: totalDuration,
      icon: <Clock className="text-green-700" />,
    },
    {
      id: 3,
      name: "Keyboard/Stroke",
      data: totalKeystrokes,
      icon: <Keyboard className="text-purple-700" />,
    },
    {
      id: 4,
      name: "Mouse Clicks",
      data: totalMouseClicks,
      icon: <Mouse className="text-yellow-700" />,
    },
  ];
  const finddetails = async () => {
    if (!username.trim()) {
      setSearchError("Enter a username before searching.");
      return;
    }

    setIsSearching(true);
    setSearchError("");

    try {
      const res = await getTodayActivity(username.trim(), testActivityDate);
      const totals = res?.data ?? res;
      const recordsArray = res?.records ?? [];
      setSearchedActivities(recordsArray);
      setTotalDuration(totals?.totalDuration ?? 0);
      setTotalKeystrokes(totals?.totalKeyStrokes ?? 0);
      setTotalMouseClicks(totals?.totalMouseClicks ?? 0);
      setActiveWindow(totals?.records?.[0]?.activeWindow ?? "No App");
      setIdleSeconds(totals?.idleSeconds ?? 0);
    } catch (error) {
      const responseMessage = error.response?.data;

      setSearchError(
        typeof responseMessage === "string"
          ? responseMessage
          : (responseMessage?.message ?? "Could not load activity details."),
      );
    } finally {
      setIsSearching(false);
    }
  };

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
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  finddetails();
                }
              }}
            />
            <button
              type="button"
              aria-label="Search activity details"
              className="disabled:opacity-50"
              disabled={isSearching}
              onClick={finddetails}
            >
              <UserRoundSearch
                className="text-green-300 hover:text-green-500 hover:scale-105 duration-150"
                size={40}
              />
            </button>
          </div>
        </div>
        {searchError && <p className="px-7 text-red-300">{searchError}</p>}
        {searchedActivities && !searchError && (
          <p className="px-7 text-gray-300">
            Found {searchedActivities.length} activity record(s) for {username}.
          </p>
        )}

        <div className="flex flex-row justify-around ">
          {activitydata.map((activity) => (
            <ActivityCard
              key={activity.id}
              icon={activity.icon}
              title={activity.name}
              subtitle={activity.data}
            />
          ))}
        </div>

        <div className="pt-2.5">
          <ActiveTimeLine activities={searchedActivities} />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 p-8 gap-8 ">
          <div className="">
            <ActiveWindow />
          </div>
          <div className="">
            <InputActivity
              strokes={totalKeystrokes}
              clicks={totalMouseClicks}
              idletime={idleSeconds}
            />
          </div>

   
        </div>
      </div>
    </div>
  );
};
