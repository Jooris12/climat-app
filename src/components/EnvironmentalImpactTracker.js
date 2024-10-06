import React, { useState } from 'react';
import './EnvironmentalImpactTracker.css';

const EnvironmentalImpactTracker = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: 'Voiture (km)', emissions: 0.24 }, // Example: emissions per km
    { id: 2, name: 'Vols (heures)', emissions: 0.15 }, // Example: emissions per hour of flight
    { id: 3, name: 'Énergie (kWh)', emissions: 0.5 }, // Example: emissions per kWh
  ]);
  
  const [inputValues, setInputValues] = useState({
    car: 0,
    flights: 0,
    energy: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const calculateImpact = () => {
    const totalImpact = (inputValues.car * activities[0].emissions) + 
                        (inputValues.flights * activities[1].emissions) + 
                        (inputValues.energy * activities[2].emissions);
    return totalImpact.toFixed(2); // Round to two decimal places
  };

  return (
    <div className="impact-tracker">
      <h2>Suivi de l'Impact Environnemental</h2>
      <form>
        <div className="input-group">
          <label>
            Kilomètres parcourus en voiture:
            <input
              type="number"
              name="car"
              value={inputValues.car}
              onChange={handleChange}
              min="0"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Heures de vol:
            <input
              type="number"
              name="flights"
              value={inputValues.flights}
              onChange={handleChange}
              min="0"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Consommation d'énergie (kWh):
            <input
              type="number"
              name="energy"
              value={inputValues.energy}
              onChange={handleChange}
              min="0"
            />
          </label>
        </div>
      </form>
      <div className="impact-result">
        <h3>Impact Environnemental Estimé: {calculateImpact()} kg CO₂</h3>
      </div>
    </div>
  );
};

export default EnvironmentalImpactTracker;
