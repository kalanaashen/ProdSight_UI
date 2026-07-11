import { ActiveCard } from "../components/EmployeeComponents/ActiveCard";
import { ActivityBarChart } from "../components/ActivityBarChart";
import { BrowserAnalyticsChart } from "../components/BrowserAnaylticsChart";
import { WeeklyTrendsChart } from "../components/WeeklyTrendChart";
import { HourlyActivityChart } from "../components/HourlyActivityChart";
import { WebSiteTable } from "../components/WebSitePage/WebSiteTable";
import { useEmployee } from "../context/EmployeeContext";
export const WebUsagePage = () => {
  const { selectedEmployee } = useEmployee();
  const carddata = [
    {
      id: 1,
      title: "Total Sessions",
      value: 818,
      subvalue: "+15% from last week",
    },
    {
      id: 2,
      title: "Avg Session Time",
      value: "7.2m",
      subvalue: "+8% from last week",
    },
    {
      id: 3,
      title: "Unique Domains",
      value: 124,
      subvalue: "This week",
    },
    {
      id: 4,
      title: "Productive %",
      value: "67%",
      subvalue: "+5% from last week",
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

      <div className="grid md:grid-cols-4  gird-cols-2 my-10 p-2.5">
        {carddata.map((card) => (
          <ActiveCard key={card.id} {...card} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p-8">
        <div>
          <ActivityBarChart />
        </div>
        <div>
          <BrowserAnalyticsChart />
        </div>

        <div>
          <WeeklyTrendsChart />
        </div>
        <div>
          <HourlyActivityChart />
        </div>
      </div>

      <div className="p-8 pt-0">
        <WebSiteTable />
      </div>
    </div>
  );
};
