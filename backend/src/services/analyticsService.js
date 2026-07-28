import axios from "axios";

// Change this to your deployed AI service URL
// Example:
// https://your-ai-service.onrender.com

const AI_URL =
  process.env.AI_SERVICE_URL ||
  "https://YOUR-AI-SERVICE.onrender.com";

export const predictOccupancy = async (data) => {
  try {
    const response = await axios.post(
      `${AI_URL}/predict-occupancy`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("AI Service Error:", error.response?.data || error.message);
    throw error;
  }
};