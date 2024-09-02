const sequelize = require("./db");
const Sequelize = require("sequelize");
const Financial = require("./financial.model")
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db