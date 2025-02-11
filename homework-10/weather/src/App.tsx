import React from 'react';
import WeatherProvider from './WeatherProvider';
import WeatherSearch from './WeatherSearch';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

const App: React.FC = () => {
    return (
        <WeatherProvider>
            <div className='app-container'>
                <div className='weather-box'>
                    <h1>Weather Application</h1>
                    <WeatherSearch />
                    <WeatherDisplay />
                </div>
            </div>
        </WeatherProvider>
    );  
}

export default App;