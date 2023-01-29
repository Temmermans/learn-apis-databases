const express = require("express");
const app = express();
const port = process.env.PORT || 3010;
const path = require("path");
const userRoutes = require("./start/router.js");

app.use(express.static("static"));

app.use(express.json());

app.use("/api", userRoutes);

app.use("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
