const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const adminUser = {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD
  };

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (username !== adminUser.username) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const isMatch = await bcrypt.compare(password, adminUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, 'process.env.JWT_SECRET', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;