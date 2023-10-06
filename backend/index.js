const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const monguri = 'mongodb+srv://Sandeep41800:9T8jyUkQOc7S4bEx@cluster0.ppgo7xs.mongodb.net/Popcorn?retryWrites=true&w=majority';

mongoose
  .connect(monguri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.error('Connection error');
  });

const port = 8000;

const userRoutes = require('./Router/user');
app.use('/math', userRoutes);

const mathFindRouter = require('./Router/SearchMath');
app.use('/math', mathFindRouter);

const mathCreateRouter = require('./Router/CreateMath');
app.use('/math', mathCreateRouter);

const logEnterRouter= require('./Router/Login');
app.use('/',logEnterRouter);

app.listen(port, () => {
  console.log(`Node.js is currently active and listening on port ${port}`);
});
