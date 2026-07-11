import axiosInstance from "./axiosInstance";
import { unwrapData } from "./apiHelpers";

export async function getAllAppUsage() {
  return unwrapData(await axiosInstance.get("appusage/"));
}

export async function getAppUsageByUserId(userId) {
  if (!userId) throw new Error("A user ID is required to load app usage.");
  return unwrapData(
    await axiosInstance.get(`appusage/${encodeURIComponent(userId)}`),
  );
}

export async function createAppUsage(payload) {
  return unwrapData(await axiosInstance.post("appusage/", payload));
}
