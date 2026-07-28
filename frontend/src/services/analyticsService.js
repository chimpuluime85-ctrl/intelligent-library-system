import axios from "axios";

const API =
  "http://localhost:5000/api/analytics";

export const predictOccupancy =
  async (data) => {

    const response =
      await axios.post(
        `${API}/occupancy`,
        data
      );

    return response.data;
  };