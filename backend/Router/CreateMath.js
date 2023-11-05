// CreateMath.js

const express = require('express');
const router = express.Router();
const math = require('../Schema/Math');
3
router.post('/', (req, res) => {
  const { id, maths1, maths2, maths3 } = req.body;
  const newMath = new math({
    id,
    maths1,
    maths2,
    maths3,
  });
  newMath
    .save()
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
