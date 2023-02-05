const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/tutorials_db";
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
