const neo4j = require("neo4j-driver");
const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "pwd")
);

exports.getSession = function (context) {
  if (context.neo4jSession) {
    return context.neo4jSession;
  } else {
    context.neo4jSession = driver.session();
    return context.neo4jSession;
  }
};

exports.dbWhere = function (name, keys) {
  if (_.isArray(name)) {
    _.map(name, (obj) => {
      return _whereTemplate(obj.name, obj.key, obj.paramKey);
    });
  } else if (keys && keys.length) {
    return (
      "WHERE " +
      _.map(keys, (key) => {
        return _whereTemplate(name, key);
      }).join(" AND ")
    );
  }
};

function whereTemplate(name, key, paramKey) {
  return name + "." + key + "={" + (paramKey || key) + "}";
}
