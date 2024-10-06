import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GabonMap from './components/GabonMap';
import WeatherDashboard from './components/WeatherDashboard';
import ScreenDemarrage from './components/ScreenDemarrage';
import EnvironmentalImpactTracker from './components/EnvironmentalImpactTracker'; // Import the component
import Community from './components/Community'; // Import the component
import './App.css';

const App = () => {
  const [filter, setFilter] = useState('temperature');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ScreenDemarrage />} />
        <Route path="/dashboard" element={
          <div className="app">
            <Sidebar onFilterChange={handleFilterChange} />
            <GabonMap filter={filter} /> {/* Pass the filter to GabonMap */}
            <WeatherDashboard selectedFilter={filter} /> {/* Pass the filter to WeatherDashboard */}
          </div>
        } />
        <Route path="/impact" element={<EnvironmentalImpactTracker />} /> {/* New Route */}
        <Route path="/community" element={<Community />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;
