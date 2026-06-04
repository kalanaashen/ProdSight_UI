import React from "react";
import { id } from "zod/locales";
import { ActiveCard } from "../components/EmployeeComponents/ActiveCard";
export const EmployeePage = () => {
  const data = [
    {
      id: 1,
      title: "Total Employees",
      value: 100,
      subvalue: "5 new this week",
    },
    {
      id: 2,
      title: "Average Productivity",
      value: "67%",
      subvalue: "Up 5% from last week",
    },
    {
      id: 3,
      title: " Active Employees",
      value: 80,
      subvalue: "20 currently idle",
    },
    {
      id: 4,
      title: "Best Performer",
      value: "John Doe",
      subvalue: "Productivity Score: 95%",
    },
  ];

  return (
    <div className="bg-slate-800 h-screen">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl text-white">Team Members</h1>
        <h1 className=" text-gray-400 text-lg">
          Monitor and manage employee productivity metrics
        </h1>
      </div>
    
      <div className="flex flex-row justify-around mt-10">
        {data.map((item)=>(
          <ActiveCard key={item.id} title={item.title} value={item.value} subvalue={item.subvalue} />
        ))}
      </div>
    </div>
  );
};
