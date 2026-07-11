import { AppCategoryChart } from "../components/AppUsage/AppCategoryChart";
import { ScreenCard } from "../components/AppUsage/ScreenCard";
import { TopApplicationsChart } from "../components/AppUsage/TopApplicationsChart";
import { AppTable } from "../components/AppUsage/AppTable";
import { useEmployee } from "../context/EmployeeContext";
import { getAppUsageByUserId } from "../api/appUsageApi";
import { getTopApps } from "../api/analyticsApi";
import { getApiErrorMessage } from "../api/apiHelpers";

export const AppUsagePage = () => {
  const { selectedEmployee, selectedEmployeeId } = useEmployee();
  const [appUsage, setAppUsage] = useState([]);
  const [topApps, setTopApps] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedEmployeeId) return;
    let active = true;
    const request = window.setTimeout(() => {
      setLoading(true);
      setError("");
      Promise.all([
        getAppUsageByUserId(selectedEmployeeId),
        getTopApps(selectedEmployeeId),
      ])
        .then(([usage, apps]) => {
          if (!active) return;
          setAppUsage(Array.isArray(usage) ? usage : usage ? [usage] : []);
          setTopApps(Array.isArray(apps) ? apps : []);
        })
        .catch((requestError) => {
          if (active) setError(getApiErrorMessage(requestError, requestError.message));
        })
        .finally(() => active && setLoading(false));
    }, 0);
    return () => { active = false; window.clearTimeout(request); };
  }, [selectedEmployeeId]);

  const categoryData = useMemo(() => {
    const totals = appUsage.reduce((result, item) => {
      const category = item.category ?? "neutral";
      result[category] = (result[category] ?? 0) + (Number(item.duration) || 0);
      return result;
    }, {});
    const total = Object.values(totals).reduce((sum, value) => sum + value, 0) || 1;
    const colors = { productive: "#10b981", unproductive: "#ef4444", neutral: "#f59e0b" };
    return Object.entries(totals).map(([label, value]) => ({
      label: `${label[0].toUpperCase()}${label.slice(1)} Apps`,
      value: Math.round((value / total) * 100),
      color: colors[label] ?? "#3b82f6",
    }));
  }, [appUsage]);

  const carddata = [
    {
      id: 1,
      title: "Productive Apps",
      percentage: categoryData.find((item) => item.label.startsWith("Productive "))?.value ?? 0,
      totalTime: (appUsage.filter((item) => item.category === "productive").reduce((sum, item) => sum + (Number(item.duration) || 0), 0) / 60).toFixed(1),
      totalApps: appUsage.filter((item) => item.category === "productive").length,
    },
    {
      id: 2,
      title: "Unproductive Apps",
      percentage: categoryData.find((item) => item.label.startsWith("Unproductive "))?.value ?? 0,
      totalTime: (appUsage.filter((item) => item.category === "unproductive").reduce((sum, item) => sum + (Number(item.duration) || 0), 0) / 60).toFixed(1),
      totalApps: appUsage.filter((item) => item.category === "unproductive").length,
    },
    {
      id: 3,
      title: "Neutral Apps",
      percentage: categoryData.find((item) => item.label.startsWith("Neutral "))?.value ?? 0,
      totalTime: (appUsage.filter((item) => item.category === "neutral").reduce((sum, item) => sum + (Number(item.duration) || 0), 0) / 60).toFixed(1),
      totalApps: appUsage.filter((item) => item.category === "neutral").length,
    },
  ];

  return (
    <div className=" bg-slate-900 p-8">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-white">
          Application Usage Analytics
        </h1>
        <h1 className="text-sm font-semibold text-gray-400">
          {selectedEmployee
            ? `Application usage patterns for ${selectedEmployee}`
            : "Search for an employee above to view application usage"}
        </h1>
      </div>
      {loading && <p className="mt-4 text-slate-300">Loading app usage…</p>}
      {error && <p className="mt-4 text-red-300">{error}</p>}

      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {carddata.map((data) => (
          <ScreenCard key={data.id} {...data} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <TopApplicationsChart applications={topApps.map((app) => ({ name: app._id, duration: app.totalDuration }))} />
        <AppCategoryChart categories={categoryData} />
      </div>

      <div className="pt-10">
        <AppTable apps={appUsage.map((app) => ({
          id: app._id,
          appname: app.appName,
          time: `${app.duration ?? 0}m`,
          duration: `${app.duration ?? 0}m`,
          lastvisited: app.recordedAt ? new Date(app.recordedAt).toLocaleString() : "—",
        }))} />
      </div>
    </div>
  );
};
import { useEffect, useMemo, useState } from "react";
