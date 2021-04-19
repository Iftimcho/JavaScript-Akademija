const weather = require('../pkg/weather/index');
const getWeather = async (req, res) => {
    try{
        const data = await weather.byCity(req.params.city);
        res.status(200).send({
            error: false,
            data
        });
    }
    catch (err) {
        res.send({
            error: true,
            message: err.message
        });
    }
};

const getWeatherByCityState = async (req, res) => {
    try{
        const data = await weather.byCityState(req.params.city, req.params.state);
        res.status(200).send({
            data
        });
    } catch(err) {
        res.send({
            error: true,
            message: err.message
        });
    }
}

// const getTemperatures = async (req, res) => {
//     try {
//         const result = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=41.9981&lon=21.4254&exclude=current,minutely,daily,alerts&units=metric&appid=${API_KEY}`);
//         const data = await result.json();
        
//         const temperatures = [];
//         data.hourly.forEach(item => {
//             temperatures.push(item.temp);
//         });

//         res.send({
//             error: false,
//             data: temperatures
//         });
//     } catch(err) {
//         res.status(400).send({
//             error: true,
//             message: err.message
//         });
//     }
// }
 
module.exports = {
    getWeather,
    // getTemperatures
    getWeatherByCityState
}