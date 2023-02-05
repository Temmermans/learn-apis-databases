const express = require("express");
const app = express();
const port = process.env.PORT || 3010;
const path = require("path");
const redis = require("redis")
const client = redis.createClient();

client.on("error", (err) => {
  console.log(err);
});

app.use(express.static("static"));

app.use(express.json());

var checkCache = (req, res, next) => {
  let search = req.params.search;
  client.get(search, (err, data) => {
    if (err) throw err;
    if (!data) {
      return next();
    } else {
      return res.json({ data: JSON.parse(data), info: "data from cache" });
    }
  });
};

app.get("/starwars/:search", checkCache, async (req, res) => {
  let search = req.params.search;
  let data = await axios(starwarsURL + search);
  await client.set(search, JSON.stringify(data.data));
  res.json({ data: data.data, info: "data from 3rd party API" });
});

app.use("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
