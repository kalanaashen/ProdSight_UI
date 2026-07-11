import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const WeeklyTrendsChart = ({ summaries = [] }) => {
  const points = summaries.length ? [...summaries].reverse() : [];
  const data = {
    labels: points.length
      ? points.map((item) => new Date(item.summaryDate).toLocaleDateString(undefined, { weekday: "short" }))
      : ["No data"],
    datasets: [
      {
        data: points.length ? points.map((item) => item.productivityScore ?? 0) : [0],
        backgroundColor: "#6366f1", // Purple-Indigo color
        borderRadius: 12, // ✅ Makes the tops of the bars rounded
        borderSkipped: false,
        barPercentage: 0.6, // Makes the individual vertical bars thicker
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
      y: { grid: { color: "#1e293b", borderDash: [3, 3] }, ticks: { color: "#94a3b8" } }
    }
  };

  return <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 w-full h-[350px]"><Bar data={data} options={options} /></div>;
};
