// src/components/QuickActions.js
import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    { label: 'Add User', icon: '➕', color: 'blue' },
    { label: 'Generate Report', icon: '📊', color: 'green' },
    { label: 'New Product', icon: '📦', color: 'purple' },
    { label: 'Settings', icon: '⚙️', color: 'yellow' },
  ];

  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`action-button ${action.color}`}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;