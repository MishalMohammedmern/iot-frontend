import axiosInstance from "@/instance/axios";

export const getHeroApi = async () => {
  try {
    const response = await axiosInstance.get(`/heroes?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error("API fetching failed");
  }
};