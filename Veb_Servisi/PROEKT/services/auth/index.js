// create express server
const express = require('express');
const api = express();

// initiate a connection to the database
require('../../config/db');

// json middleware
api.use(express.json());

// ROUTES AUTHENTICATION
const jwt = require('express-jwt');
api.use(jwt({ secret: 'secret_key', algorithms: ['HS256'] }).unless({
    path: [
      '/api/v1/auth/register',
      '/api/v1/auth/login'
    ]
  }));

api.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError') {
        res.status(401).send({
            error: true,
            message: 'You have to be logged in to get there. Try logging in.'
        });
    }
})


// import router
const authRouter = require('./router');
api.use('/api/v1/auth',authRouter);

// run express server
api.listen(3000, (err) => {
    if(err) {
        return console.log(`Error happened while starting the auth service: ${err}`);
    } 
    console.log('Auth service started on port 3000...');
});
