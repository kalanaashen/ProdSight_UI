import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

export const HourlyActivityChart = ({ websites = [] }) => {
  const hourlyTotals = websites.reduce((totals, website) => {
    const hour = website.recordedAt ? new Date(website.recordedAt).getHours() : 0;
    const category = website.category === "productive" ? "active" : "idle";
    totals[hour] ??= { active: 0, idle: 0 };
    totals[hour][category] += Number(website.duration) || 0;
    return totals;
  }, {});
  const hours = Object.keys(hourlyTotals).map(Number).sort((a, b) => a - b);
  const data = {
    labels: hours.length
      ? hours.map((hour) => new Date(2000, 0, 1, hour).toLocaleTimeString([], { hour: "numeric" }))
      : ["No data"],
    datasets: [
      {
        label: "Active Session",
        data: hours.length ? hours.map((hour) => hourlyTotals[hour].active) : [0],
        borderColor: "#10b981", // Green line
        backgroundColor: "rgba(16, 185, 129, 0.2)", // Translucent green fill
        fill: true,
        tension: 0.4,
        pointRadius: 0, // Hides line dots like your design
      },
      {
        label: "Idle Session",
        data: hours.length ? hours.map((hour) => hourlyTotals[hour].idle) : [0],
        borderColor: "#ef4444", // Red line
        backgroundColor: "rgba(239, 68, 68, 0.2)", // Translucent red fill
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }, // Hides default legend box
    scales: {
      x: { grid: { color: "#1e293b", borderDash: [3, 3] }, ticks: { color: "#94a3b8" } },
      y: { grid: { color: "#1e293b", borderDash: [3, 3] }, ticks: { color: "#94a3b8" } }
    }
  };

  return <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 w-full h-[350px]"><Line data={data} options={options} /></div>;
};
