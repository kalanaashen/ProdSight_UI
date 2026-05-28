import axiosInstance from "./axiosInstance";

export const RegisterUser = async (payload) => {
  try {
    const result = await axiosInstance.post("users/", payload);
    return result.data;
  } catch (error) {
    throw error;
  }
};
