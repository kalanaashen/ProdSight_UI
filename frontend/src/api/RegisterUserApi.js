import axiosInstance from "./axiosInstance";

export const RegisterUser = async (payload) => {
  const result = await axiosInstance.post("users/", payload);
  return result.data;
};
