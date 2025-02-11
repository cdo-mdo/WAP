import React, { useState, useContext } from 'react';
import WeatherContext from './WeatherContext';

const WeatherSearch: React.FC = () => {
    const [city, setCity] = useState('');
    const weatherContext = useContext(WeatherContext);

    if (!weatherContext) {
        throw new Error('WeatherSearch must be used within a WeatherProvider');
    }

    const { fetchWeather } = weatherContext;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter city name'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    );
}

export default WeatherSearch;