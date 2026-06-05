import { ArrowDown, ArrowUp } from "lucide-react";

export const EmployeeTable = ({
  employees,
  name,
  role,
  status,
  proc_score,
  foc_score,
  activetime,
  trend,
}) => {
  const employeeRows =
    employees ||
    [
      {
        name,
        role,
        status,
        proc_score,
        foc_score,
        activetime,
        trend,
      },
    ].filter((employee) => employee.name);

  const getStatusClass = (employeeStatus = "") => {
    const normalizedStatus = employeeStatus.toLowerCase();

    if (normalizedStatus === "active") {
      return "border-green-500/40 bg-green-500/10 text-green-400";
    }

    if (normalizedStatus === "idle") {
      return "border-yellow-500/40 bg-yellow-500/10 text-yellow-400";
    }

    if (normalizedStatus === "offline") {
      return "border-gray-500/40 bg-gray-500/10 text-gray-400";
    }

    return "border-sky-500/40 bg-sky-500/10 text-sky-400";
  };

  const renderScore = (score) => {
    const numericScore = Number(score) || 0;
    const clampedScore = Math.min(Math.max(numericScore, 0), 100);

    return <span className="font-semibold text-white">{clampedScore}%</span>;
  };

  const renderTrend = (employeeTrend = "") => {
    const normalizedTrend = employeeTrend.toLowerCase();

    if (normalizedTrend === "increasing") {
      return (
        <span className="inline-flex items-center gap-1.5 font-semibold text-green-400">
          <ArrowUp size={16} />
          {employeeTrend}
        </span>
      );
    }

    if (normalizedTrend === "decreasing") {
      return (
        <span className="inline-flex items-center gap-1.5 font-semibold text-red-400">
          <ArrowDown size={16} />
          {employeeTrend}
        </span>
      );
    }

    return <span className="text-gray-300">{employeeTrend}</span>;
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-600 bg-black/20">
      <div className="flex flex-col gap-1 border-b border-gray-700 px-6 py-5">
        <h1 className="text-xl font-bold text-white">
          Detailed Employee Metrics
        </h1>
        <p className="text-sm text-gray-400">
          Productivity, focus, and active time across the team
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-slate-900/80 text-xs uppercase text-gray-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Employee</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Productivity</th>
              <th className="px-6 py-4 font-semibold">Focus</th>
              <th className="px-6 py-4 font-semibold">Active Time</th>
              <th className="px-6 py-4 font-semibold">Trend</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {employeeRows.length > 0 ? (
              employeeRows.map((employee, index) => (
                <tr
                  key={`${employee.name}-${index}`}
                  className="bg-slate-900 transition-colors hover:bg-slate-950"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 font-semibold text-white">
                        {employee.name?.[0]?.toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          {employee.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {employee.role}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
                        employee.status
                      )}`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {renderScore(employee.proc_score)}
                  </td>

                  <td className="px-6 py-4">
                    {renderScore(employee.foc_score)}
                  </td>

                  <td className="px-6 py-4 font-semibold text-white">
                    {employee.activetime}
                  </td>

                  <td className="px-6 py-4 text-sm">
                    {renderTrend(employee.trend)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-6 py-10 text-center text-sm text-gray-400"
                  colSpan="6"
                >
                  No employee metrics available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
