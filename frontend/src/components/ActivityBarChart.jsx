import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const ActivityBarChart = ({ activities }) => {
 
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#94a3b8" }, // Slate-400 text
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#94a3b8" },
      },
      y: {
        grid: { color: "#334155" },
        ticks: { color: "#94a3b8" },
      },
    },
  };


  const data = {
    labels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"], 
    datasets: [
      {
        label: "Keystrokes",
        data: activities?.map((log) => log.keystrokes) || [
          120, 450, 380, 50, 520, 310,
        ],
        backgroundColor: "#818cf8",
        borderRadius: 6,
      },
      {
        label: "Mouse Clicks",
        data: activities?.map((log) => log.mouseClicks) || [
          45, 110, 85, 15, 130, 90,
        ],
        backgroundColor: "#f59e0b", 
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 w-full h-[350px]">
      <h3 className="text-white font-semibold text-lg mb-4">
        Input Metrics Comparison
      </h3>
      <div className="w-full h-[85%]">
        {/* 4. Render the native Canvas element */}
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
