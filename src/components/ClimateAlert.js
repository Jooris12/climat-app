import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClimateAlert.css';  // Style du composant

const API_KEY = 'default';  // Remplacez par votre clé API

const ClimateAlert = ({ latitude, longitude }) => {
  const [alerts, setAlerts] = useState([]);
  const [longTermForecast, setLongTermForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        // Requête pour les alertes météorologiques extrêmes
        const alertResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${API_KEY}&units=metric&lang=fr`
        );
        
        if (alertResponse.data.alerts) {
          setAlerts(alertResponse.data.alerts);  // Récupère les alertes extrêmes
        }

        // Requête pour les prévisions à long terme (7 jours)
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${API_KEY}&units=metric&lang=fr`
        );
        setLongTermForecast(forecastResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données météorologiques :", error);
      }
      setLoading(false);
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div className="climate-alert-container">
      <h2>Alertes météorologiques extrêmes</h2>
      {alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <div key={index} className="alert-box">
            <h3>{alert.event}</h3>
            <p><strong>Description :</strong> {alert.description}</p>
            <p><strong>Commence :</strong> {new Date(alert.start * 1000).toLocaleString()}</p>
            <p><strong>Expire :</strong> {new Date(alert.end * 1000).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>Aucune alerte météo extrême pour cette région actuellement.</p>
      )}

      <h2>Prévisions à long terme (7 jours)</h2>
      {longTermForecast ? (
        <div className="forecast-container">
          {longTermForecast.list.map((day, index) => (
            <div key={index} className="forecast-box">
              <h4>{new Date(day.dt * 1000).toLocaleDateString()}</h4>
              <p><strong>Température :</strong> {day.temp.day}°C</p>
              <p><strong>Conditions :</strong> {day.weather[0].description}</p>
              <p><strong>Humidité :</strong> {day.humidity}%</p>
              <p><strong>Vent :</strong> {day.speed} m/s</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Impossible de charger les prévisions à long terme.</p>
      )}
    </div>
  );
};

export default ClimateAlert;
