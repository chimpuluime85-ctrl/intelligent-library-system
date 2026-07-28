import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/analytics`;

export const predictOccupancy =
  async (data) => {

    const response =
      await axios.post(
        `${API}/occupancy`,
        data
      );

    return response.data;
  };