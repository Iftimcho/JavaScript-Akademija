const fetch = require('node-fetch');
const config = require('../config');
const MOVIES_API_KEY = config.get('movies').api_key;
// const MOVIES_API_PREFIX = 'http://www.omdbapi.com/?apikey=';
const MOVIES_API_PREFIX = 'http://omdbapi.com/?apikey=';

const byTitle = async (title) => {
    const result = await fetch(`${MOVIES_API_PREFIX}${MOVIES_API_KEY}&t=${title}`);
    const data = await result.json();
    return data;
}

const seasonCache = {};
const bySeason = async (title, season) => {
    let currentTimestamp = new Date().getTime();
    if(seasonCache[title] && seasonCache[title].season == season && seasonCache[title].timestamp > currentTimestamp) {
        return seasonCache[title].episodes;
    }
    const result = await fetch(`${MOVIES_API_PREFIX}${MOVIES_API_KEY}&t=${title}&Season=${season}`);
    const data = await result.json();
    console.log(data.Season);
    seasonCache[title] = {
        episodes: data,
        timestamp: new Date().getTime() + 60 * 1000,
        season: season
    };
    return seasonCache[title].episodes;
}

module.exports = {
    byTitle,
    bySeason
}