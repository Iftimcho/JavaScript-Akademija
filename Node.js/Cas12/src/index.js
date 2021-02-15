const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRouter = require('./todo/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Requests 

// vo prviot parametar go registrirame prefiksot koj ke se dodade na site ruti po default.
// Sekoja ruta ke pocnuva so prefiksot i ne mora da se pisuva
app.use('/todo', todoRouter) 
const mongoDbUrl = 'mongodb://localhost:27017/todo';

await mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true}); // dali ke ima nov parser i nova unificirana topologija
console.log(`Successfully connected to MongoDb at: ${mongoDbUrl}`);
// logikata za startuvanje ke ja wrap-neme vo edna funkcija. Ova e nov nacin
const startApplication  = async () => {
    await app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
}

startApplication();