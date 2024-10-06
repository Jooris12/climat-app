import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = ({ onFilterChange }) => {
  return (
    <div className="sidebar">
      <h2>Filtres Climat</h2>
      <button onClick={() => onFilterChange('temperature')}>Température</button>
      <button onClick={() => onFilterChange('precipitation')}>Précipitations</button>
      <button onClick={() => onFilterChange('humidity')}>Humidité</button>
      <button onClick={() => onFilterChange('cloudy')}>Nuageux</button>
      <button onClick={() => onFilterChange('sunny')}>Ensoleillé</button>

      {/* Button to navigate to the Community page */}
      <Link to="community">
        <button className="community-btn"> Espace Communauté</button>
      </Link>
    </div>
  );
};

export default Sidebar;
