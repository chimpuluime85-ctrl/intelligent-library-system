import { Space } from "../models/index.js";

export const getSpaces = async (
  req,
  res
) => {
  try {
    const spaces =
      await Space.findAll();

    res.status(200).json({
      success: true,
      count: spaces.length,
      data: spaces,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSpaceById = async (
  req,
  res
) => {
  try {
    const space =
      await Space.findByPk(
        req.params.id
      );

    if (!space) {
      return res.status(404).json({
        success: false,
        message:
          "Space not found",
      });
    }

    res.status(200).json({
      success: true,
      data: space,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createSpace = async (
  req,
  res
) => {
  try {
    const space =
      await Space.create(
        req.body
      );

    res.status(201).json({
      success: true,
      data: space,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSpace = async (
  req,
  res
) => {
  try {
    const space =
      await Space.findByPk(
        req.params.id
      );

    if (!space) {
      return res.status(404).json({
        success: false,
        message:
          "Space not found",
      });
    }

    await space.update(req.body);

    res.status(200).json({
      success: true,
      data: space,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteSpace = async (
  req,
  res
) => {
  try {
    const space =
      await Space.findByPk(
        req.params.id
      );

    if (!space) {
      return res.status(404).json({
        success: false,
        message:
          "Space not found",
      });
    }

    await space.destroy();

    res.status(200).json({
      success: true,
      message:
        "Space deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};