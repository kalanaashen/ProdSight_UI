import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const TopApplicationsChart = ({ applications = [] }) => {
  const chartApps = applications.length
    ? applications
    : [
        { name: "VS Code", duration: 285 },
        { name: "Chrome", duration: 165 },
      ];
  const data = {
    labels: chartApps.map((app) => app.name),
    datasets: [
      {
        data: chartApps.map((app) => app.duration),
        backgroundColor: [
          "#3b82f6",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
          "#10b981",
          "#06b6d4",
          "#ec4899",
        ],
        borderRadius: 7,
        barThickness: 32,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} minutes`,
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 300,
        grid: {
          color: "#25334d",
          borderDash: [4, 4],
        },
        ticks: {
          color: "#94a3b8",
          stepSize: 75,
        },
        border: {
          color: "#64748b",
        },
      },
      y: {
        grid: {
          color: "#25334d",
          borderDash: [4, 4],
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 16,
          },
        },
        border: {
          color: "#64748b",
        },
      },
    },
  };

  return (
    <div className="h-[350px] w-full rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Top Applications by Time
      </h3>
      <div className="h-[85%] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
