import React from "react";

import { ActiveCard } from "../EmployeeComponents/ActiveCard";

export const WebUsagePage = () => {
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
    <div className="h-screen bg-slate-900">
      <div className="flex flex-col py-10">
        <h1 className="font-bold text-3xl text-white">
          Website Usage Analytics
        </h1>
        <h1 className="font-semibold text-sm text-gray-400">
          Track and analyze browsing patterns and website visits
        </h1>
      </div>

      <div className="grid md:grid-cols-4  gird-cols-2 my-10 p-2.5">
        {carddata.map((card) => (
          <ActiveCard key={card.id} {...card} />
        ))}
      </div>

      <div className="flex flex-row gap-x-2.5">
        <h1>pie chart</h1>
        <h1>line chart</h1>
      </div>
    </div>
  );
};
