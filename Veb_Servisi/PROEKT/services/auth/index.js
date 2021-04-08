// create express server
const express = require('express');
const api = express();
// import router
const authRouter = require('./router');
// initiate a connection to the database
require('../../config/db');



// json middleware
api.use(express.json());
api.use('/api/v1/auth',authRouter);

// run express server
api.listen(3000, (err) => {
    if(err) {
        return console.log(`Error happened while starting the auth service: ${err}`);
    } 
    console.log('Auth service started on port 3000...');
});
