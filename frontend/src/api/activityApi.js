import axiosInstance from "./axiosInstance";

const getTodayActivity = async (username, date) => {
  const res = await axiosInstance.get(`${username}/${date}`);
  return res.data;
};

export default getTodayActivity;
