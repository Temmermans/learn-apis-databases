const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.json({ api: "movies" });
});

module.exports = router;
