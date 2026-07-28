import { Resource } from "../models/index.js";

export const getResources =
  async (req, res) => {
    try {
      const resources =
        await Resource.findAll();

      res.status(200).json({
        success: true,
        count:
          resources.length,
        data: resources,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const createResource =
  async (req, res) => {
    try {
      const resource =
        await Resource.create(
          req.body
        );

      res.status(201).json({
        success: true,
        data: resource,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const updateResource =
  async (req, res) => {
    try {
      const resource =
        await Resource.findByPk(
          req.params.id
        );

      if (!resource) {
        return res.status(404).json({
          success: false,
          message:
            "Resource not found",
        });
      }

      await resource.update(
        req.body
      );

      res.status(200).json({
        success: true,
        data: resource,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const deleteResource =
  async (req, res) => {
    try {
      const resource =
        await Resource.findByPk(
          req.params.id
        );

      if (!resource) {
        return res.status(404).json({
          success: false,
          message:
            "Resource not found",
        });
      }

      await resource.destroy();

      res.status(200).json({
        success: true,
        message:
          "Resource deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };