import axiosInstance from "./axiosInstance";
import { unwrapData } from "./apiHelpers";

const requireUserId = (userId) => {
  if (!userId) throw new Error("A user ID is required to load analytics.");
  return encodeURIComponent(userId);
};

export async function getDailyAnalytics(userId, date = new Date()) {
  const day = date instanceof Date ? date.toISOString() : date;
  return unwrapData(
    await axiosInstance.get(`analytics/daily/${requireUserId(userId)}`, {
      params: { date: day },
    }),
  );
}

export async function getWeeklyAnalytics(userId) {
  return unwrapData(
    await axiosInstance.get(`analytics/weekly/${requireUserId(userId)}`),
  );
}

export async function getMonthlyAnalytics(userId) {
  return unwrapData(
    await axiosInstance.get(`analytics/monthly/${requireUserId(userId)}`),
  );
}

export async function getTopApps(userId) {
  return unwrapData(
    await axiosInstance.get(`analytics/top-apps/${requireUserId(userId)}`),
  );
}
