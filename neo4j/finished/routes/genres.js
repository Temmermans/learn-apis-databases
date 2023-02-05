const Genres = require("../models/genres"),
  writeResponse = require("../helpers/response").writeResponse,
  dbUtils = require("../database");

exports.list = function (req, res, next) {
  Genres.getAll(dbUtils.getSession(req))
    .then((response) => writeResponse(res, response))
    .catch(next);
};
