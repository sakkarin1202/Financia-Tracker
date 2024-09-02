const {DataTypes} = require("sequelize");
const sequelize = require("./db");
const { types } = require("pg");

const Financial = sequelize.define("financial", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Financial.sync({ force: false })
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

module.exports = Financial;