import { useEffect, useState } from "react";
import { ActiveCard } from "../components/EmployeeComponents/ActiveCard";
import { EmployeeCard } from "../components/EmployeeComponents/EmployeeCard";
import { EmployeeTable } from "../components/EmployeeComponents/EmployeeTable";
import { getEmployees } from "../api/employeeApi";
import { getAllProductivitySummaries } from "../api/productivitySummaryApi";
export const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let active = true;

    Promise.all([getEmployees(), getAllProductivitySummaries()])
      .then(([users, summaries]) => {
        if (!active) return;
        const latestByUser = (Array.isArray(summaries) ? summaries : []).reduce((result, summary) => {
          const userId = String(summary.userId);
          if (!result[userId] || new Date(summary.summaryDate) > new Date(result[userId].summaryDate)) result[userId] = summary;
          return result;
        }, {});
        setEmployees(
          users.map((user) => {
            const summary = latestByUser[String(user._id)] ?? {};
            return ({
            name: user.name ?? user.username ?? user.fullName,
            role: user.role ?? user.jobTitle ?? "Employee",
            status: user.status ?? "Offline",
            proc_score: summary.productivityScore ?? 0,
            foc_score: summary.focusScore ?? 0,
            activetime: summary.totalWorkMinutes != null ? `${summary.totalWorkMinutes}m` : "—",
            trend: user.trend ?? "—",
          });}),
        );
      })
      .catch(() => setEmployees([]));

    return () => {
      active = false;
    };
  }, []);
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
        {data.map((item) => (
          <ActiveCard
            key={item.id}
            title={item.title}
            value={item.value}
            subvalue={item.subvalue}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-8">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.name}
            name={employee.name}
            role={employee.role}
            pro_score={employee.proc_score}
            foc_score={employee.foc_score}
            activetime={employee.activetime}
            idletime={employee.idletime ?? "—"}
          />
        ))}
      </div>

      <div>
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
};
