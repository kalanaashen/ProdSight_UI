import axiosInstance from "./axiosInstance";

export async function getEmployees() {
  const response = await axiosInstance.get("users/");
  const payload = response.data?.data ?? response.data;
  return Array.isArray(payload) ? payload : (payload?.users ?? []);
}
