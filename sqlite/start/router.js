const express = require("express");
const router = express.Router();

// define routes for the users api
router.get("/", (req, res) => {
  res.send("Users api");
});

module.exports = router;
