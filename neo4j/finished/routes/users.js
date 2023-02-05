// movies.js
const Users = require("../models/users"),
  writeResponse = require("../helpers/response").writeResponse,
  writeError = require("../helpers/response").writeError,
  loginRequired = require("../middlewares/loginRequired"),
  dbUtils = require("../database"),
  _ = require("lodash");

exports.register = function (req, res, next) {
  const username = _.get(req.body, "username");
  const password = _.get(req.body, "password");

  if (!username) {
    throw { username: "This field is required.", status: 400 };
  }
  if (!password) {
    throw { password: "This field is required.", status: 400 };
  }

  Users.register(dbUtils.getSession(req), username, password)
    .then((response) => writeResponse(res, response, 201))
    .catch(next);
};

exports.login = function (req, res, next) {
  const username = _.get(req.body, "username");
  const password = _.get(req.body, "password");

  if (!username) {
    throw { username: "This field is required.", status: 400 };
  }
  if (!password) {
    throw { password: "This field is required.", status: 400 };
  }

  Users.login(dbUtils.getSession(req), username, password)
    .then((response) => writeResponse(res, response))
    .catch(next);
};

exports.me = function (req, res, next) {
  loginRequired(req, res, () => {
    const authHeader = req.headers["authorization"];
    const match = authHeader.match(/^Token (\S+)/);
    if (!match || !match[1]) {
      throw {
        message: "invalid authorization format. Follow `Token <token>`",
        status: 401,
      };
    }

    const token = match[1];
    Users.me(dbUtils.getSession(req), token)
      .then((response) => writeResponse(res, response))
      .catch(next);
  });
};
