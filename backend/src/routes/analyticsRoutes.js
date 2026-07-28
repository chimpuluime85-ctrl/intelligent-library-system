import express from "express";

import {
  getOccupancyPrediction,
} from "../controllers/analyticsController.js";

const router =
  express.Router();

router.post(
  "/occupancy",
  getOccupancyPrediction
);

export default router;