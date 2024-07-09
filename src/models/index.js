const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config.json').development;

const sequelize = new Sequelize(config);

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

sequelize.sync();

module.exports = {
  sequelize,
  User
};
