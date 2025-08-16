import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://awesome-dream-f80124217b.strapiapp.com/api",
});

export default axiosInstance;
