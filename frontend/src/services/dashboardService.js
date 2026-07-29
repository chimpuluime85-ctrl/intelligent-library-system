import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/dashboard`;

export const getDashboardStats = async () => {
  const response = await axios.get(API);

  return response.data.data;
};