import { ActiveCard } from "../components/EmployeeComponents/ActiveCard";
import { ActivityBarChart } from "../components/ActivityBarChart";
import { BrowserAnalyticsChart } from "../components/BrowserAnaylticsChart";
import { WeeklyTrendsChart } from "../components/WeeklyTrendChart";
import { HourlyActivityChart } from "../components/HourlyActivityChart";
import { WebSiteTable } from "../components/WebSitePage/WebSiteTable";
import { useEmployee } from "../context/EmployeeContext";
import { getWebUsageByUserId } from "../api/webUsageApi";
import { getWeeklyAnalytics } from "../api/analyticsApi";
import { getApiErrorMessage } from "../api/apiHelpers";
export const WebUsagePage = () => {
  const { selectedEmployee, selectedEmployeeId } = useEmployee();
  const [webUsage, setWebUsage] = useState([]);
  const [weeklyAnalytics, setWeeklyAnalytics] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedEmployeeId) return;
    let active = true;
    const request = window.setTimeout(() => {
      setError("");
      Promise.all([
        getWebUsageByUserId(selectedEmployeeId),
        getWeeklyAnalytics(selectedEmployeeId),
      ])
        .then(([usage, analytics]) => {
          if (!active) return;
          setWebUsage(Array.isArray(usage) ? usage : []);
          setWeeklyAnalytics(Array.isArray(analytics) ? analytics : []);
        })
        .catch((requestError) => active && setError(getApiErrorMessage(requestError, requestError.message)));
    }, 0);
    return () => { active = false; window.clearTimeout(request); };
  }, [selectedEmployeeId]);

  const webSummary = useMemo(() => {
    const totalDuration = webUsage.reduce((sum, item) => sum + (Number(item.duration) || 0), 0);
    const domains = new Set(webUsage.map((item) => item.domain ?? item.title).filter(Boolean));
    const productive = webUsage.filter((item) => item.category === "productive").reduce((sum, item) => sum + (Number(item.duration) || 0), 0);
    return { totalDuration, domains: domains.size, productive: totalDuration ? Math.round((productive / totalDuration) * 100) : 0 };
  }, [webUsage]);
  const carddata = [
    {
      id: 1,
      title: "Total Sessions",
      value: webUsage.length,
      subvalue: "Recorded visits",
    },
    {
      id: 2,
      title: "Avg Session Time",
      value: `${webUsage.length ? (webSummary.totalDuration / webUsage.length).toFixed(1) : 0}m`,
      subvalue: "Per visit",
    },
    {
      id: 3,
      title: "Unique Domains",
      value: webSummary.domains,
      subvalue: "Unique sites",
    },
    {
      id: 4,
      title: "Productive %",
      value: `${webSummary.productive}%`,
      subvalue: "Of browsing time",
    },
  ];
  return (
    <div className="h-full bg-slate-900">
      <div className="flex flex-col py-10">
        <h1 className="font-bold text-3xl text-white">
          Website Usage Analytics
        </h1>
        <h1 className="font-semibold text-sm text-gray-400">
          {selectedEmployee
            ? `Browsing patterns and website visits for ${selectedEmployee}`
            : "Search for an employee above to view website usage"}
        </h1>
      </div>
      {error && <p className="px-2 text-red-300">{error}</p>}

      <div className="grid md:grid-cols-4  gird-cols-2 my-10 p-2.5">
        {carddata.map((card) => (
          <ActiveCard key={card.id} {...card} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p-8">
        <div>
          <ActivityBarChart activities={webUsage} />
        </div>
        <div>
          <BrowserAnalyticsChart />
        </div>

        <div>
          <WeeklyTrendsChart summaries={weeklyAnalytics} />
        </div>
        <div>
          <HourlyActivityChart />
        </div>
      </div>

      <div className="p-8 pt-0">
        <WebSiteTable websites={webUsage.map((website) => ({
          id: website._id,
          webname: website.domain ?? website.title ?? website.url,
          time: `${website.duration ?? 0}m`,
          duration: `${website.duration ?? 0}m`,
          lastvisited: website.recordedAt ? new Date(website.recordedAt).toLocaleString() : "—",
        }))} />
      </div>
    </div>
  );
};
import { useEffect, useMemo, useState } from "react";
