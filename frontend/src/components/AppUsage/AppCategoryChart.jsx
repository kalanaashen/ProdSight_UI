import { Pie } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const categories = [
  { label: "Development Tools", value: 45, color: "#3b82f6" },
  { label: "Communication", value: 25, color: "#8b5cf6" },
  { label: "Browsers", value: 15, color: "#f59e0b" },
  { label: "Entertainment", value: 10, color: "#ef4444" },
  { label: "Utilities", value: 5, color: "#10b981" },
];

export const AppCategoryChart = () => {
  const data = {
    labels: categories.map((category) => category.label),
    datasets: [
      {
        data: categories.map((category) => category.value),
        backgroundColor: categories.map((category) => category.color),
        borderColor: "#f8fafc",
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="h-[350px] w-full rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        App Category Distribution
      </h3>

      <div className="mx-auto h-52 w-full max-w-xs">
        <Pie data={data} options={options} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.label}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="truncate text-slate-300">{category.label}</span>
            </div>
            <span className="font-bold text-white">{category.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
