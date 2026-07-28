import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    bookingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    purpose: {
      type: DataTypes.TEXT,
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "approved",
        "rejected"
      ),
      defaultValue: "pending",
    },
  }
);

export default Booking;