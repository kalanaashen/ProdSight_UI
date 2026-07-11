import axiosInstance from "./axiosInstance";
import { unwrapData } from "./apiHelpers";

export async function getAllWebUsage() {
  return unwrapData(await axiosInstance.get("webusage/"));
}

export async function getWebUsageByUserId(userId) {
  if (!userId) throw new Error("A user ID is required to load web usage.");
  return unwrapData(
    await axiosInstance.get(`webusage/${encodeURIComponent(userId)}`),
  );
}

export async function createWebUsage(payload) {
  return unwrapData(await axiosInstance.post("webusage/", payload));
}
