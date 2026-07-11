import axiosInstance from "./axiosInstance";
import { unwrapData } from "./apiHelpers";

export async function getEmployees() {
  const response = await axiosInstance.get("users/");
  const payload = unwrapData(response);
  return Array.isArray(payload) ? payload : (payload?.users ?? []);
}

export async function getEmployeeByName(name) {
  return unwrapData(
    await axiosInstance.get(`users/by-name/${encodeURIComponent(name)}`),
  );
}

export async function getEmployeeById(id) {
  return unwrapData(await axiosInstance.get(`users/${encodeURIComponent(id)}`));
}
