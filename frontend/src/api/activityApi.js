import axiosInstance from "./axiosInstance";
import { unwrapData } from "./apiHelpers";

const getTodayActivity = async (username, date) => {
  const res = await axiosInstance.get(
    `activity/today/${encodeURIComponent(username)}/${encodeURIComponent(date)}`,
  );
  return unwrapData(res);
};

export const getActivites = async () => {
  const res = await axiosInstance.get("activity/");
  return unwrapData(res);
};



export default getTodayActivity;
