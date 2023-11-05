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

const mernReg=require('./Router/MernRegRouter');
app.use('/',mernReg);

const AseReg=require('./Router/AseRegRouter');
app.use('/',AseReg);

const PsqtReg=require('./Router/PsqtRegRouter');
app.use('/',PsqtReg);

const MpReg=require('./Router/MpRegRouter');
app.use('/',MpReg);

const Sec_21_add=require('./Router/SectionRouter/Sec_21Router');
app.use('/',Sec_21_add);
const Sec_21_upd=require('./Router/SectionRouter/Sec_21Router');
app.use('/',Sec_21_upd);
const addDayRouter = require('./Router/DayRouter/Friday'); // Replace with the correct path to your addDayRouter.js
const updateDayRouter = require('./Router/DayRouter/Friday'); // Replace with the correct path to your updateDayRouter.js

// Use the routers
app.use('/', addDayRouter);
app.use('/', updateDayRouter);
app.listen(port, () => {
  console.log(`Node.js is currently active and listening on port ${port}`);
});
