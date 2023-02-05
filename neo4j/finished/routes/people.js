const People = require("../models/people"),
  _ = require("lodash"),
  writeResponse = require("../helpers/response").writeResponse,
  dbUtils = require("../database");

exports.list = function (req, res, next) {
  People.getAll(dbUtils.getSession(req))
    .then((response) => writeResponse(res, response))
    .catch(next);
};

exports.getBaconPeople = function (req, res, next) {
  const name1 = req.query.name1;
  const name2 = req.query.name2;

  People.getBaconPeople(
    dbUtils.getSession(req),
    req.query.name1,
    req.query.name2
  )
    .then((response) => writeResponse(res, response))
    .catch(next);
};

exports.findById = function (req, res, next) {
  const id = req.params.id;
  if (!id) throw { message: "Invalid id", status: 400 };

  People.getById(dbUtils.getSession(req), id)
    .then((response) => writeResponse(res, response))
    .catch(next);
};
