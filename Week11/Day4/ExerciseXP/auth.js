const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust according to your setup
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

// User Registration
router.post('/register', [
  body('username').isLength({ min: 5 }),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to the database
  // Example:
  // await User.create({ username, password: hashedPassword });

  res.status(201).send('User registered');
});

// User Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Find user in the database
  // Example:
  // const user = await User.findOne({ where: { username } });
  // if (!user || !(await bcrypt.compare(password, user.password))) {
  //   return res.status(401).send('Invalid credentials');
  // }

  const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
