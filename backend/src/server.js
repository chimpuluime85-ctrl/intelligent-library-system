import app from "./app.js";
import { connectDB } from "./config/database.js";
import sequelize from "./config/database.js";
import { env } from "./config/env.js";

import User from "./models/User.js";
import "./models/index.js";

const startServer = async () => {
  try {
    await connectDB();

    await sequelize.sync({
      alter: true,
    });

    await sequelize.sync({
  alter: true,
});

    console.log(
      "Database Models Synced"
    );

    app.listen(env.PORT, () => {
      console.log(
        `Server running on port ${env.PORT}`
      );
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();