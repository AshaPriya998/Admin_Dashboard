// src/components/StatsCard.js
import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, change, icon, color }) => {
  const changeColor = change.includes('+') ? 'positive' : 'negative';
  
  return (
    <div className={`stats-card ${color}`}>
      <div className="stats-info">
        <h3>{title}</h3>
        <p className="stats-value">{value}</p>
        <p className={`stats-change ${changeColor}`}>
          {change} from last week
        </p>
      </div>
      <div className="stats-icon">
        {icon}
      </div>
    </div>
  );
};

export default StatsCard;