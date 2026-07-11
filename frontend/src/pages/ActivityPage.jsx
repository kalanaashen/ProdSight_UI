import { useCallback, useEffect, useState } from "react";
import { ActivityCard } from "../components/ActivityPage/ActivityCard";
import { Monitor, Clock, Keyboard, Mouse } from "lucide-react";
import { InputActivity } from "../components/ActivityPage/InputActivity";
import { ActiveWindow } from "../components/ActivityPage/ActiveWindow";
import { ActiveTimeLine } from "../components/ActivityPage/ActiveTimeLine";
import getTodayActivity from "../api/activityApi";
import { useEmployee } from "../context/EmployeeContext";
import { formatSeconds } from "../utils/timeFormat";

export const ActivityPage = () => {
  const { selectedEmployee } = useEmployee();
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
      data: formatSeconds(totalDuration),
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
  const finddetails = useCallback(async () => {
    if (!selectedEmployee) {
      setSearchError("Search for an employee in the top bar to view activity details.");
      setSearchedActivities([]);
      return;
    }

    setIsSearching(true);
    setSearchError("");

    try {
      const today = new Date().toISOString().split("T")[0];
      const res = await getTodayActivity(selectedEmployee, today);
      const totals = res?.data ?? res;
      const recordsArray = totals?.records ?? [];
      setSearchedActivities(recordsArray);
      setTotalDuration(totals?.totalDuration ?? 0);
      setTotalKeystrokes(totals?.totalKeyStrokes ?? 0);
      setTotalMouseClicks(totals?.totalMouseClicks ?? 0);
      setActiveWindow(recordsArray[0]?.activeWindow ?? "No App");
      setIdleSeconds(totals?.totalIdleSeconds ?? 0);
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
  }, [selectedEmployee]);

  useEffect(() => {
    const request = window.setTimeout(finddetails, 0);
    return () => window.clearTimeout(request);
  }, [finddetails]);

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
          <p className="self-center text-sm text-slate-300">
            {isSearching ? "Loading…" : selectedEmployee ? `Employee: ${selectedEmployee}` : "No employee selected"}
          </p>
        </div>
        {searchError && <p className="px-7 text-red-300">{searchError}</p>}
        {searchedActivities && !searchError && (
          <p className="px-7 text-gray-300">
            Found {searchedActivities.length} activity record(s) for {selectedEmployee}.
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
