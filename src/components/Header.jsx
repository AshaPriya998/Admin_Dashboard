// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h2>Dashboard Overview</h2>
      <div className="header-actions">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-profile">
          <div className="user-avatar">AP</div>
          <span className="user-name">Asha Priya</span>
        </div>
      </div>
    </header>
  );
};

export default Header;