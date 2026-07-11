export const ScreenCard = ({ title, percentage, totalTime, totalApps }) => {
  const percentageColor =
    percentage >= 80
      ? "text-green-500"
      : percentage >= 50
        ? "text-orange-500"
        : "text-red-500";

  return (
    <div className="rounded-2xl border border-gray-700 bg-black/30 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="text-sm text-gray-400">{title}</h1>
          <p className="mt-3 text-2xl font-bold text-white">{totalTime}h</p>
          <p className="mt-1 text-xs text-gray-500">{totalApps} apps used</p>
        </div>

        <div className="flex flex-col items-end">
          <p className={`text-xl font-bold ${percentageColor}`}>
            {percentage}%
          </p>
          <p className="text-xs text-gray-500">usage</p>
        </div>
      </div>
    </div>
  );
};
