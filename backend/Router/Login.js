const express = require('express');
const router = express.Router();
const log = require('../Router/logo');

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await log.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user document
    const newUser = new log({
      email,
      password,
    });

    await newUser.save();

    res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Error saving data to the database:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
router.get('/login', async (req, res) => {
    const { email, password } = req.query;
  
    // Check if the email and password match a user in the database
    const user = await log.findOne({ email, password });
  
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
  
    // Login successful
    res.status(200).json({ message: 'Login successful' });
  });
  
module.exports = router;
