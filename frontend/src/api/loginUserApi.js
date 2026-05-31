import axiosInstance from "./axiosInstance";

export const loginuser = (payload) => {
  try {
    const res = axiosInstance.post("auth/", payload);
    return res.data;
  } catch (error) {
    throw new error;
  }
};




