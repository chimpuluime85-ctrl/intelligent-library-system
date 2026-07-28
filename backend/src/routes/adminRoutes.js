import express from "express";

import { getDashboardStats } from "../controllers/adminController.js";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

/* Dashboard */

router.get(
  "/dashboard",
  protect,
  adminOnly,
  getDashboardStats
);

/* Users */

router.get(
  "/users",
  protect,
  adminOnly,
  getUsers
);

router.post(
  "/users",
  protect,
  adminOnly,
  createUser
);

router.put(
  "/users/:id",
  protect,
  adminOnly,
  updateUser
);

router.delete(
  "/users/:id",
  protect,
  adminOnly,
  deleteUser
);

export default router;