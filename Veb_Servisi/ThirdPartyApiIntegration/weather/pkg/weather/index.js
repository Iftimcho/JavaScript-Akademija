const fetch = require('node-fetch');
const config = require('../config');
const API_KEY = config.get('weather').api_key;
const API_PREFIX = `http://api.openweathermap.org/data/${config.get('weather').api_version}`;

// cityCache ke sodrzi podatoci slicni na ovie 
// const cityCache = {
//     "skopje": {
//         "data": {},
//         "timestamp": 123123123
//     },
//     "bitola": {
//         "data": {},
//         "timestamp": 133211267
//     }
// };

const cityCache = {};
const byCity = async (city) => {
    let currentTimestamp = new Date().getTime();
    if(cityCache[city] && cityCache[city].timestamp > currentTimestamp) {
        return cityCache[city].data;
    }
    // ako ne postoi vo Keshot
    const result = await fetch(`${API_PREFIX}/weather?q=${city}&units=metric&appid=${API_KEY}`);
    let data = await result.json();

    cityCache[city] = {
        data,
        timestamp: new Date().getTime() + 60 * 1000 // 60 sekundi
    }
    return cityCache[city].data;
}

const cityStateCache = {};
const byCityState = async (city, state) => {  
    const currentTimestamp = new Date().getTime();  
    if(cityStateCache[city] && cityStateCache[city].state == state && cityStateCache[city].timestamp > currentTimestamp) {
        return cityStateCache[city].city;
    }

    const result = await fetch(`${API_PREFIX}/weather?q=${city},${state}&units=metric&appid=${API_KEY}`);
    let data = await result.json();

    cityStateCache[city] = {
        city: data,
        state: state,
        timestamp: new Date().getTime() + 60 * 1000
    };

    return cityStateCache[city].city;
}

module.exports = {
    byCity,
    byCityState
}