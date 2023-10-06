const mongoose = require('mongoose');

const mathSchema = new mongoose.Schema({
  id: String,
  maths1: String,
  maths2: String,
  maths3: String,
});

module.exports = mongoose.model('maths', mathSchema);
