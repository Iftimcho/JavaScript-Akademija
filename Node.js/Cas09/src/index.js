const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./router/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRouter);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});