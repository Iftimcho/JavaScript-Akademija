import React, { useState, useEffect } from 'react';
import {api} from './../constants/apiConstants';
import "./../assets/Cities.css";
export function Cities(){
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(weather);
    }, [weather])
    function searchWeather() {
        setLoading(true);
        fetch(`${api.base}/weather?q=${city}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(json => {
            setWeather(json);
            setCity('');
            setLoading(false);
        })
        .catch(err => 
            {
                setLoading(false);
                alert(err);
            })
    }

    function dateBuilder(datum) {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = days[datum.getDay()];
        let date = datum.getDate();
        let month = months[datum.getMonth()];
        let year = datum.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }
    return(
    <div className={weather ? (weather.main.temp > 15 ? 'cities warm' : 'cities cold') : 'cities'}>
        <div className="search-box">
            <input 
                type="text"
                placeholder="Search City"
                value={city}
                onChange={e => setCity(e.target.value)}
                className="search-bar"
                />
                <button onClick={searchWeather} className="search-button">
                    Search
                </button>
        </div>
        {
            weather && 
            <div className="location-container">
                <div className="location-box">
                    <div className="location">
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className="date">
                        {dateBuilder(new Date())}
                        {/* new Date ni dava metodi so koi mozeme da vrakjame den, mesec,godina itn no vo brojki
                        i nie tie posle ke gi konvertirame vo zborovi.. */}
                    </div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                        {Math.round(weather.main.temp)} &#8451;
                    </div>
                    <div className="weather">
                        {weather.weather[0].main}
                    </div>
                </div>
            </div>
        }
        {
            loading && <div className="loader"> </div>
        }
    </div>
    )
}