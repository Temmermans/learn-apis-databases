const express = require("express");
const app = express();
const port = process.env.PORT || 3010;
const path = require("path");
const redis = require("redis");
const client = redis.createClient();

client.on("error", (err) => {
  console.log(err);
});

app.use(express.static("static"));

app.use(express.json());

app.get("/starwars/:search", async (req, res) => {
  res.json({ data: [], info: "data from 3rd party API" });
});

app.use("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
