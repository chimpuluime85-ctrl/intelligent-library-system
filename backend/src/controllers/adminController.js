import User from "../models/User.js";
import Space from "../models/Space.js";
import Resource from "../models/Resource.js";
import Booking from "../models/Booking.js";

export const getDashboardStats = async (req, res) => {
  try {
    const [
      totalUsers,
      totalStudents,
      totalLibrarians,
      totalAdmins,
      totalSpaces,
      totalResources,
      totalBookings,
      availableSpaces,
    ] = await Promise.all([
      User.count(),
      User.count({ where: { role: "student" } }),
      User.count({ where: { role: "librarian" } }),
      User.count({ where: { role: "admin" } }),
      Space.count(),
      Resource.count(),
      Booking.count(),
      Space.count({
        where: {
          status: "available",
        },
      }),
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalStudents,
        totalLibrarians,
        totalAdmins,
        totalSpaces,
        totalResources,
        totalBookings,
        availableSpaces,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};