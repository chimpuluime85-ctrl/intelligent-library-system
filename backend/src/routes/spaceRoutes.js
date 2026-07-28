import express from "express";

import {
  getSpaces,
  getSpaceById,
  createSpace,
  updateSpace,
  deleteSpace,
} from "../controllers/spaceController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getSpaces);

router.get("/:id", protect, getSpaceById);

router.post("/", protect, createSpace);

router.put("/:id", protect, updateSpace);

router.delete("/:id", protect, deleteSpace);

export default router;