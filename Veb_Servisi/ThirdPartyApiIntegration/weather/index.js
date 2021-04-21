// imports/requires
const express = require('express');
const weather = require('./handlers/weather');
const movies = require('./handlers/movies');
const config = require('./pkg/config');
// declarations
const api = express();

//middlewares
api.use(express.json());

// routes
api.get('/weather/:city', weather.getWeather);
api.get('/weather/city/:city/state/:state', weather.getWeatherByCityState);
api.get('/movie/:title', movies.getMovie);
api.get('/movie/:title/Season/:season', movies.getSeason);
// start
api.listen(config.get('service').port, err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Service successfully started on port 9000...');
});