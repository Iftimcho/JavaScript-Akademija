var express = require('express');
var mongoose = require('mongoose');


// Database connection
mongoose.connect(
    'mongodb://localhost:27017/doctorsDb',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  );

var indexRouter = require('./routes/index');
var doctorsRouter = require('./routes/doctors');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/doctors', doctorsRouter);

module.exports = app;
