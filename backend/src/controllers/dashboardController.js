import { Op } from "sequelize";
import Booking from "../models/Booking.js";
import Resource from "../models/Resource.js";
import Space from "../models/Space.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalSpaces = await Space.count();

    const totalResources = await Resource.count();

    const occupiedSpaces = await Space.count({
      where: {
        status: "occupied",
      },
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const bookingsToday = await Booking.count({
      where: {
        bookingDate: {
          [Op.gte]: today,
        },
      },
    });

    const occupancy =
      totalSpaces === 0
        ? 0
        : Math.round((occupiedSpaces / totalSpaces) * 100);

    res.json({
      totalSpaces,
      totalResources,
      bookingsToday,
      occupancy,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};