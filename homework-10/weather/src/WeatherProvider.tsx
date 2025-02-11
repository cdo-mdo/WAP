import React, { useState, ReactNode } from 'react';
import axios from 'axios';
import { WeatherResponse, ErrorResponse } from './types';
import WeatherContext from './WeatherContext';

const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (city: string) => {
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
        // const API_KEY = process.env.VITE_OPENWEATHER_API_KEY;
        const URL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${API_KEY}`;

        try {
            const response = await axios.get<WeatherResponse>(URL);
            setWeather(response.data);
            setError(null);
        } catch (err) {
            const errorResponse = err.response?.data as ErrorResponse;
            setError(errorResponse?.message || 'City not found. Try again.');
            setWeather(null);
        }
    };

    return (
        <WeatherContext.Provider value={{ weather, fetchWeather, error }}>
            { children }
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;