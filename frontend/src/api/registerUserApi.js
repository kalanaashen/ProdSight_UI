import axios from "axios";
import axiosInstance from "./axiosInstance";

export const registerUser = async (payload) => {
  try {
    const result = await axiosInstance.post("/", payload);
    return result.data;
  } catch (error) {
    throw new error("Something Error Happen");
  }
};
