import {
  Booking,
  User,
  Space,
} from "../models/index.js";

export const getBookings =
  async (req, res) => {
    try {
      const bookings =
        await Booking.findAll({
          include: [
            User,
            Space,
          ],
        });

      res.status(200).json({
        success: true,
        count:
          bookings.length,
        data: bookings,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const createBooking =
  async (req, res) => {
    try {
      const booking =
        await Booking.create({
          ...req.body,
          UserId:
            req.user.id,
        });

      res.status(201).json({
        success: true,
        data: booking,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const updateBooking =
  async (req, res) => {
    try {
      const booking =
        await Booking.findByPk(
          req.params.id
        );

      if (!booking) {
        return res.status(404).json({
          success: false,
          message:
            "Booking not found",
        });
      }

      await booking.update(
        req.body
      );

      res.status(200).json({
        success: true,
        data: booking,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const deleteBooking =
  async (req, res) => {
    try {
      const booking =
        await Booking.findByPk(
          req.params.id
        );

      if (!booking) {
        return res.status(404).json({
          success: false,
          message:
            "Booking not found",
        });
      }

      await booking.destroy();

      res.status(200).json({
        success: true,
        message:
          "Booking deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };