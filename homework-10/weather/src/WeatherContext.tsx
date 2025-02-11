import { createContext } from 'react';
import { WeatherResponse } from './types';

interface WeatherContextType {
    weather: WeatherResponse | null;
    error: string | null;
    fetchWeather: (city: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export default WeatherContext;