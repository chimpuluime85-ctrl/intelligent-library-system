import { Op } from "sequelize";

import Space from "../models/Space.js";
import Resource from "../models/Resource.js";
import Booking from "../models/Booking.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalSpaces = await Space.count();

    const totalResources = await Resource.count();

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const bookingsToday = await Booking.count({
      where: {
        createdAt: {
          [Op.gte]: today,
        },
      },
    });

    const activeBookings = await Booking.count({
      where: {
        status: "approved",
      },
    });

    const occupancyRate =
      totalSpaces === 0
        ? 0
        : Math.round(
            (activeBookings / totalSpaces) * 100
          );

    res.json({
      success: true,

      data: {
        totalSpaces,
        totalResources,
        bookingsToday,
        activeBookings,
        occupancyRate,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};