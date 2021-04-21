const express = require('express');
const config = require('./pkg/config');
const mailer = require('./handlers/mailer');

const api = express();

api.use(express.json());

api.post('/mailer', mailer.sendMail);

api.listen(config.get('server').port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Mailer service started on port ${config.get('server').port}`);
})