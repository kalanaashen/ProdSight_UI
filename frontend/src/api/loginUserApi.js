import axiosInstance from "./axiosInstance";

export const loginuser = async (payload) => {
  const res = await axiosInstance.post("auth/", payload);
  return res.data;
};



