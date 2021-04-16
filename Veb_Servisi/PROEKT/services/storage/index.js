const express = require('express');
const api = express();
const router = require('./router');
const jwt = require('express-jwt');
const upload = require('express-fileupload');
require('../../config/db');

api.use(express.json());

api.use(jwt({ secret: 'secret_key', algorithms: ['HS256'] }));

api.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({
      error: true,
      message: 'You need to log in in order to perform this action'
    });
  }
});

api.use(upload());

api.use('/api/v1/storage', router);

api.listen(3002, err => {
  if (err) {
    return console.log('Error happened while starting the storage service: ', err);
  }

  // TODO: Put port number to an env variable
  console.log('Storage service successfully started on port 3002...');
});