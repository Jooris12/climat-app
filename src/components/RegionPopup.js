import React from 'react';

const RegionPopup = ({ region }) => {
  return (
    <div>
      <h3>{region.name}</h3>
      <p>Température moyenne : {region.temperature}°C</p>
      <p>Humidité : {region.humidity}%</p>
      <p>Précipitations : {region.precipitation} mm</p>
    </div>
  );
};

export default RegionPopup;
