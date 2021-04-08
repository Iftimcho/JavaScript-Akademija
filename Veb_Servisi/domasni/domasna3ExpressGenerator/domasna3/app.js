var express = require('express');
var indexRouter = require('./routes/index');
var app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/carsdb',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, err => {
    if (err) {
      console.log('Error occurred: ', err);
      return; // so ova ja prekinuvame operacijata i ne se zema vo obzir pecatenjeto za uspesno povrzuvanje. return moze i da se kaci pred console.log-ot
    }
    console.log('Successfully connected to DB');

    // Ovoj pristap e pospor od gorniot, bidejki imame razgranuvanje
    // if (err) {
    //   console.log('Error occurred: ', err);
    // } else {
    //   console.log('Successfully connected to DB');
    // }
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;