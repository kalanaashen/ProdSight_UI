import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const BrowserAnalyticsChart = ({ websites = [] }) => {
  const categoryTotals = websites.reduce((totals, website) => {
    const category = website.category ?? "neutral";
    totals[category] = (totals[category] ?? 0) + (Number(website.duration) || 0);
    return totals;
  }, {});
  const labels = Object.keys(categoryTotals);
  const data = {
    labels: labels.length ? labels.map((label) => `${label[0].toUpperCase()}${label.slice(1)}`) : ["No data"],
    datasets: [
      {
        data: labels.length ? Object.values(categoryTotals) : [1],
        backgroundColor: ["#3b82f6", "#f59e0b", "#06b6d4", "#a855f7"], // Blue, Orange, Cyan, Purple
        borderWidth: 4,
        borderColor: "#0f172a", // Matches your dark slate background color to create spacing gaps
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // ✅ Creates the clean hollow center ring effect
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#ffffff", usePointStyle: true, padding: 20 },
      },
    },
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 w-full h-[350px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};
