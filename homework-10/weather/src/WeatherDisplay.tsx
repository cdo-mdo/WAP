import React, { useContext } from 'react';
import WeatherContext from './WeatherContext';

const WeatherDisplay: React.FC = () => {
    const weatherContext = useContext(WeatherContext);

    if (!weatherContext) {
        throw new Error('WeatherDisplay must be used within a WeatherProvider');
    }

    const { weather, error } = weatherContext;

    if (error) return <p style={{ color: 'red' }}>{ error }</p>
    if (!weather) return <p>No weather data available.</p>

    return (
        <div>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>Temperature: {weather.main.temp} *F</p>
            <p>Humidity: {weather.main.humidity} %</p>
            <p>Wind Speed: {weather.wind.speed} mph</p>
            <p>Weather: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;
