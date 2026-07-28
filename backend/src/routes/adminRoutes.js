import express from "express";
import { getDashboardStats } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

import { protect, adminOnly } from "../middleware/authMiddleware.js";

router.get(
  "/dashboard",
  protect,
  adminOnly,
  getDashboardStats
);


export default router;