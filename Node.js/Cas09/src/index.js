const express = require('express');
const bodyParser = require('body-parser');
const { userRouter } = require('./users/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRouter);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})