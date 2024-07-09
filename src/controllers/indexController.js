// Este é um exemplo básico. Expanda conforme necessário.
const { User } = require('../models');

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

module.exports = { getUsers };
