import axiosInstance from "@/instance/axios";

export const getApi = async (route) => {
  try {
    const response = await axiosInstance.get(route);
    return response.data;
  } catch (error) {
    console.error("API fetching failed:", error);
    return null;
  }
};

export const postSubscribe = async (data) => {
  try {
    const response = await axiosInstance.post(`/subscribers`, data);
    return response.data;
  } catch (error) {
    throw new Error("API request failed");
  }
};