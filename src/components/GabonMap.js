import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './GabonMap.css';
// You need to import Leaflet icons; otherwise, they won't display
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GabonMap = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Create the map centered on Gabon
    const map = L.map('gabon-map').setView([-0.8031, 11.6094], 6); // Coordinates of Gabon

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker at the center of Gabon (example)
    const marker = L.marker([-0.8031, 11.6094], {
      icon: L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
      }),
    }).addTo(map);

    marker.bindPopup('<b>Libreville</b><br>Capitale du Gabon.').openPopup();

    return () => {
      map.remove(); // Clean up the map on component unmount
    };
  }, []);

  return (
    <div>
      <div id="gabon-map" style={{ height: '500px' }}></div>
      <button 
        className="impact-button" 
        onClick={() => navigate('/impact')} // Navigate to EnvironmentalImpactTracker
      >
        Suivi de l'Impact Environnemental
      </button>
    </div>
  );
};

export default GabonMap;
