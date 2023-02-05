const express = require("express");
const router = express.Router();

// define routes for the users api
router.get("/", (req, res) => {
  res.send("Tutorials api");
});

module.exports = router;
