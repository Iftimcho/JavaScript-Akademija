// create express server
const express = require('express');
const api = express();

// initiate a connection to the database
require('../../config/db');

// json middleware
api.use(express.json());

// ROUTE AUTHENTICATION WITH JWT
const jwt = require('express-jwt');
api.use(jwt({ secret: 'secret_key', algorithms: ['HS256']} ));
api.use((err, req, res, next) => {
    if(err.name === 'UnauthorizedError') {
        res.status(401).send({
            error: true,
            message: 'You have to be logged in to get there. Try logging in.'
        });
    }
});

// import router
const usersRouter = require('./router');
api.use('/api/v1/users',usersRouter);

// run express server
api.listen(3001, (err) => {
    if(err) {
        return console.log(`Error happened while starting the users service: ${err}`);
    } 
    console.log('Users service started on port 3001...');
});