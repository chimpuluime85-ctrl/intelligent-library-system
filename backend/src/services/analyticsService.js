import axios from "axios";

export const predictOccupancy =
  async (data) => {
    const response =
      await axios.post(
        "http://127.0.0.1:8000/predict-occupancy",
        data
      );

    return response.data;
  };