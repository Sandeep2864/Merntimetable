const express = require('express');
const router = express.Router();
const math = require('../Router/Math');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Request received for ID: ${id}`);

  math
    .findOne({ id: id })
    .then((data) => {
      if (!data) {
        res.status(404).json({ error: 'Data not found' });
        return;
      }

      const { maths1, maths2, maths3 } = data;
      res.status(200).json({ maths1, maths2, maths3 });
    })
    .catch((err) => {
      console.error('Error retrieving data:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
