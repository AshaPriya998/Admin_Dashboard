// src/components/RecentActivities.js
import React from 'react';
import './RecentActivities.css';

const RecentActivities = () => {
  const activities = [
    { user: 'John Doe', action: 'placed a new order', time: '2 min ago' },
    { user: 'Sarah Smith', action: 'updated profile information', time: '15 min ago' },
    { user: 'Michael Johnson', action: 'completed payment', time: '30 min ago' },
    { user: 'Emily Davis', action: 'registered new account', time: '45 min ago' },
    { user: 'Robert Wilson', action: 'requested password reset', time: '1 hour ago' },
  ];

  const getActionIcon = (action) => {
    if (action.includes('order')) return '🛒';
    if (action.includes('profile')) return '👤';
    if (action.includes('payment')) return '💳';
    if (action.includes('registered')) return '➕';
    return '📝';
  };

  return (
    <div className="recent-activities">
      <h3>Recent Activities</h3>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-icon">
              {getActionIcon(activity.action)}
            </div>
            <div className="activity-content">
              <p>
                <span className="user-name">{activity.user}</span> {activity.action}
              </p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;