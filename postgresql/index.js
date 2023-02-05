const express = require("express");
const cors = require("cors");
const tutorialRoutes = require("./finished/router");
const db = require("./finished/database");

const start = async () => {
  try {
    const PORT = process.env.PORT || 8080;
    const app = express();

    app.use(cors());

    // parse requests of content-type - application/json
    app.use(express.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));

    // routes
    app.use("/api/tutorials", tutorialRoutes);

    // for development purposes, we force the sync (drop tables)
    await db.sequelize.sync({ force: true });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
