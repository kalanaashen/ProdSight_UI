import { useEffect, useState } from "react";
import { ActiveCard } from "../components/EmployeeComponents/ActiveCard";
import { EmployeeCard } from "../components/EmployeeComponents/EmployeeCard";
import { EmployeeTable } from "../components/EmployeeComponents/EmployeeTable";
import { getEmployees } from "../api/employeeApi";
import { getAllProductivitySummaries } from "../api/productivitySummaryApi";
import { formatMinutes } from "../utils/timeFormat";
export const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

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
            activetime: summary.totalWorkMinutes != null ? formatMinutes(summary.totalWorkMinutes) : "—",
            idletime: summary.idleMinutes != null ? formatMinutes(summary.idleMinutes) : "—",
            trend: user.trend ?? "—",
          });}),
        );
      })
      .catch((requestError) => {
        setEmployees([]);
        setError(requestError.response?.data?.error ?? requestError.response?.data ?? "Could not load employees.");
      });

    return () => {
      active = false;
    };
  }, []);
  const averageProductivity = employees.length
    ? Math.round(employees.reduce((sum, employee) => sum + Number(employee.proc_score || 0), 0) / employees.length)
    : 0;
  const bestPerformer = employees.reduce(
    (best, employee) => Number(employee.proc_score || 0) > Number(best?.proc_score || -1) ? employee : best,
    null,
  );
  const data = [
    {
      id: 1,
      title: "Total Employees",
      value: employees.length,
      subvalue: "Registered team members",
    },
    {
      id: 2,
      title: "Average Productivity",
      value: `${averageProductivity}%`,
      subvalue: "Latest summaries",
    },
    {
      id: 3,
      title: " Active Employees",
      value: employees.filter((employee) => employee.status.toLowerCase() === "active").length,
      subvalue: "Currently active",
    },
    {
      id: 4,
      title: "Best Performer",
      value: bestPerformer?.name ?? "—",
      subvalue: `Productivity Score: ${bestPerformer?.proc_score ?? 0}%`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-800 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white">Team Members</h1>
        <p className="text-sm text-gray-400 sm:text-base">
          Monitor and manage employee productivity metrics
        </p>
      </div>
      {error && <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-red-300">{String(error)}</p>}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <ActiveCard
            key={item.id}
            title={item.title}
            value={item.value}
            subvalue={item.subvalue}
          />
        ))}
      </div>

      <div className="my-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
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
    </div>
  );
};
