import React from "react";
import { AppCategoryChart } from "../components/AppUsage/AppCategoryChart";
import { ScreenCard } from "../components/AppUsage/ScreenCard";
import { TopApplicationsChart } from "../components/AppUsage/TopApplicationsChart";

export const AppUsagePage = () => {
  const carddata = [
    {
      id: 1,
      title: "Productive Apps",
      percentage: 82,
      totalTime: "4.6",
      totalApps: 10,
    },
    {
      id: 2,
      title: "Unproductive Apps",
      percentage: 24,
      totalTime: "1.2",
      totalApps: 5,
    },
    {
      id: 3,
      title: "Neutral Apps",
      percentage: 56,
      totalTime: "2.1",
      totalApps: 8,
    },
  ];

  return (
    <div className="h-full bg-slate-900 p-8">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-white">
          Application Usage Analytics
        </h1>
        <h1 className="text-sm font-semibold text-gray-400">
          Monitor and analyze application usage patterns
        </h1>
      </div>

      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {carddata.map((data) => (
          <ScreenCard key={data.id} {...data} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <TopApplicationsChart />
        <AppCategoryChart />
      </div>
    </div>
  );
};
