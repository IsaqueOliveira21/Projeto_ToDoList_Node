const express = require('express');
const { User } = require('./models');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
