// create express server
const express = require('express');
const api = express();
// import router
const usersRouter = require('./router');
// initiate a connection to the database
require('../../config/db');



// json middleware
api.use(express.json());
api.use('/api/v1/users',usersRouter);

// run express server
api.listen(3001, (err) => {
    if(err) {
        return console.log(`Error happened while starting the users service: ${err}`);
    } 
    console.log('Users service started on port 3001...');
});