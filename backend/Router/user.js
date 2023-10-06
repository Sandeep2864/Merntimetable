const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mathslecture: String,
  mathst: String,
  mathsp: String,
});

const User = mongoose.model('users', userSchema);

// Define a route to handle the POST request from the frontend
router.post('/user', (req, res) => {
  const { mathslecture, mathst, mathsp } = req.body;
  
  const newUser = new User({
    mathslecture,
    mathst,
    mathsp,
  });

  newUser.save()
    .then(() => {
      console.log('Data saved to the database');
      res.status(200).json({ message: 'Data saved successfully' });
    })
    .catch((err) => {
      console.error('Error saving data to the database', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
