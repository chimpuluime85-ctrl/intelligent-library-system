import {
  Booking,
  User,
  Space,
  Resource,
} from "../models/index.js";

/**
 * Get all bookings
 */
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "email", "role"],
        },
        {
          model: Space,
          attributes: ["id", "name", "location"],
        },
        {
          model: Resource,
          attributes: ["id", "name", "category"],
          required: false,
        },
      ],
      order: [["bookingDate", "DESC"]],
    });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Create booking
 */
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    const newBooking = await Booking.findByPk(
      booking.id,
      {
        include: [
          {
            model: User,
            attributes: ["id", "name", "email"],
          },
          {
            model: Space,
            attributes: ["id", "name"],
          },
          {
            model: Resource,
            attributes: ["id", "name"],
            required: false,
          },
        ],
      }
    );

    res.status(201).json({
      success: true,
      data: newBooking,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update booking
 */
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await booking.update(req.body);

    const updatedBooking = await Booking.findByPk(
      booking.id,
      {
        include: [
          {
            model: User,
            attributes: ["id", "name", "email"],
          },
          {
            model: Space,
            attributes: ["id", "name"],
          },
          {
            model: Resource,
            attributes: ["id", "name"],
            required: false,
          },
        ],
      }
    );

    res.status(200).json({
      success: true,
      data: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete booking
 */
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await booking.destroy();

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};