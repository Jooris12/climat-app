import React from 'react';

const ClimateData = ({ filter }) => {
  return (
    <div className="climate-data">
      <h2>Climate Data for {filter}</h2>
      {/* Display climate data based on the selected filter */}
      {/* You can add more detailed data or charts here */}
    </div>
  );
};

export default ClimateData;
