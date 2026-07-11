const safeNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
};

export const formatMinutes = (value) => {
  const totalMinutes = Math.round(safeNumber(value));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (!hours) return `${minutes}m`;
  return minutes ? `${hours}h ${minutes}m` : `${hours}h`;
};

export const formatSeconds = (value) => {
  const totalSeconds = Math.round(safeNumber(value));
  if (totalSeconds < 60) return `${totalSeconds}s`;
  return formatMinutes(totalSeconds / 60);
};
