export const ActiveCard = ({ title, value, subvalue }) => {
  return (
    <div className="flex min-h-36 w-full flex-col justify-between rounded-2xl border border-slate-700 bg-slate-900/70 p-5 shadow-lg shadow-black/10">
      <p className="text-sm font-medium text-gray-400">{title}</p>
      <p className="truncate text-2xl font-bold text-white" title={String(value)}>{value}</p>
      <p className="text-xs text-emerald-400">{subvalue}</p>
    </div>
  );
};
