import React, { useState } from 'react';
import './Transport.css';

const Transport = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: 'Route 1: City Center', driver: 'Mr. Sharma', students: ['Priya S.', 'Rajesh K.'] },
    { id: 2, name: 'Route 2: Suburbs', driver: 'Ms. Singh', students: ['Anjali S.', 'Sandeep V.'] },
  ]);

  return (
    <div className="transport-container">
      <h2 className="transport-title">Transport Management</h2>
      <p className="transport-subtitle">Track bus routes</p>
      
      <div className="routes-grid">
        {routes.map(route => (
          <div key={route.id} className="route-card">
            <h3 className="route-name">{route.name}</h3>
            <p className="driver-info">Driver: <span>{route.driver}</span></p>
            <div className="students-list">
              <h4>Students on Route:</h4>
              <ul>
                {route.students.map((student, index) => (
                  <li key={index}>{student}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
