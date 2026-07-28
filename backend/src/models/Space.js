import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Space = sequelize.define(
  "Space",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "available",
        "occupied",
        "maintenance"
      ),
      defaultValue: "available",
    },
  }
);

export default Space;