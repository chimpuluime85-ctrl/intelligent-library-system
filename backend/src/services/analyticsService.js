import axios from "axios";

const AI_URL = "https://library-ai-ksh8.onrender.com";

export const predictOccupancy = async (data) => {
  try {
    const response = await axios.post(
      `${AI_URL}/predict-occupancy`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "AI Service Error:",
      error.response?.data || error.message
    );

    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "AI prediction failed."
    );
  }
};