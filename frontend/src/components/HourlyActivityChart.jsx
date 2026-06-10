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

export const HourlyActivityChart = () => {
  const data = {
    labels: ["9AM", "11AM", "1PM", "2PM", "3PM", "4PM", "6PM"],
    datasets: [
      {
        label: "Active Session",
        data: [35, 75, 30, 60, 75, 80, 40],
        borderColor: "#10b981", // Green line
        backgroundColor: "rgba(16, 185, 129, 0.2)", // Translucent green fill
        fill: true,
        tension: 0.4,
        pointRadius: 0, // Hides line dots like your design
      },
      {
        label: "Idle Session",
        data: [5, 10, 20, 15, 10, 8, 18],
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