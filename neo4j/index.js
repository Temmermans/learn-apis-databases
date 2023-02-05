const express = require("express");
const app = express();
const port = process.env.PORT || 3010;
const path = require("path");
const routes = require("./start/router.js");
//const setAuthUser = require("./start/middlewares/setAuthUser");
//const neo4jSessionCleanup = require("./start/middlewares/neo4jSessionCleanup");

app.use(express.static("static"));

app.use(express.json());

//app.use(setAuthUser);
//app.use(neo4jSessionCleanup);

app.use("/api", routes);

app.use("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
