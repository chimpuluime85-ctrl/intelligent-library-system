import {
  predictOccupancy,
} from "../services/analyticsService.js";

export const getOccupancyPrediction =
  async (req, res) => {
    try {
      const result =
        await predictOccupancy(
          req.body
        );

      res.status(200).json(
        result
      );
    } catch (error) {

      console.log(
        "ANALYTICS ERROR:"
      );

      console.log(error);

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };