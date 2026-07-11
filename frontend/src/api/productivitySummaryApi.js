import axiosInstance from "./axiosInstance";
import { unwrapData } from "./apiHelpers";

export async function getAllProductivitySummaries() {
  return unwrapData(await axiosInstance.get("prosummary/"));
}

export async function getProductivitySummaryByUserId(userId) {
  if (!userId) {
    throw new Error("A user ID is required to load productivity details.");
  }

  return unwrapData(
    await axiosInstance.get(`prosummary/${encodeURIComponent(userId)}`),
  );
}

export async function createProductivitySummary(payload) {
  return unwrapData(await axiosInstance.post("prosummary/", payload));
}
