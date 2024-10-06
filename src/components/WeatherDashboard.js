import React, { useState } from 'react';
import { Sun, CloudRain, Wind, Droplet } from 'lucide-react';
import './WeatherDashboard.css';

const WeatherDashboard = ({ selectedFilter }) => {
  const [selectedHour, setSelectedHour] = useState(16);

  const weatherData = [
    { hour: 15, weather: 'Ciel couvert', temp: 29, humidity: 75, precipitation: 0 },
    { hour: 16, weather: 'Ciel couvert', temp: 18, humidity: 75, precipitation: 0.2 },
    { hour: 17, weather: 'Ciel couvert', temp: 20, humidity: 75, precipitation: 0.3 },
    { hour: 18, weather: 'Ciel couvert', temp: 31, humidity: 50, precipitation: 0 },
  ];

  // Filter data based on the selectedFilter
  const filteredData = weatherData.filter(data => {
    if (selectedFilter === 'temperature') {
      return data.temp > 20; // Example filter logic for temperature
    } else if (selectedFilter === 'precipitation') {
      return data.precipitation > 0;
    } else if (selectedFilter === 'humidity') {
      return data.humidity > 70;
    }
    return true; // Default, return all data if no filter is applied
  });

  const currentWeather = filteredData.find(data => data.hour === selectedHour) || filteredData[0];

  return (
    <div className="weather-dashboard">
      <div className="grid grid-cols-6 gap-4 mb-4">
        {filteredData.map((data) => (
          <div
            key={data.hour}
            className={`weather-item ${selectedHour === data.hour ? 'selected' : ''} p-2 rounded`}
            onClick={() => setSelectedHour(data.hour)}
          >
            <div>{data.hour}:00</div>
            <div className="text-sm">{data.weather}</div>
            <div>{data.temp}°C</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="current-weather">
          <div className="temp">
            {currentWeather.temp}°C <Sun className="weather-icon inline" />
          </div>
          </div>
          <div>Ressenti 17.10°C</div> 
          <div>Précipitations: {currentWeather.precipitation} mm</div>
        <div>
          <div className="weather-info">
            <Wind className="weather-icon" /> Vitesse du vent: 7.8 m/s
          </div>
          <div className="weather-info">
            <Wind className="weather-icon" /> Direction du vent: 270 deg
          </div>
          <div className="weather-info">
            <Droplet className="weather-icon" /> Humidité: {currentWeather.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
