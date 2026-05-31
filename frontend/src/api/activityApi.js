import axiosInstance from "./axiosInstance";

const getTodayActivity = async (username, date) => {
  const res = await axiosInstance.get(
    `activity/today/${encodeURIComponent(username)}/${encodeURIComponent(date)}`,
  );
  return res.data;
};

export const getActivites = async () => {
  const res = await axiosInstance.get("activity/");
  return res.data;
};



export default getTodayActivity;
