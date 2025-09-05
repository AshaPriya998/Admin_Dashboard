// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import Chart from './components/Chart';
import RecentActivities from './components/RecentActivities';
import QuickActions from './components/QuickActions';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  // Sample data for stats cards
  const statsData = [
    {
      title: 'Total Users',
      value: '24,568',
      change: '+12%',
      icon: '👥',
      color: 'blue',
    },
    {
      title: 'Total Revenue',
      value: '$45,289',
      change: '+18%',
      icon: '💰',
      color: 'green',
    },
    {
      title: 'New Orders',
      value: '1,258',
      change: '-2%',
      icon: '🛒',
      color: 'purple',
    },
    {
      title: 'Support Tickets',
      value: '324',
      change: '+5%',
      icon: '📩',
      color: 'yellow',
    },
  ];

  // Sample data for charts
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue 2023',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [120, 190, 150, 250, 220, 300],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="app">
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header />
        <div className="dashboard-content">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
          
          <div className="charts-container">
            <div className="chart-card">
              <h3>Revenue Overview</h3>
              <Chart data={revenueData} type="line" />
            </div>
            <div className="chart-card">
              <h3>User Growth</h3>
              <Chart data={userGrowthData} type="bar" />
            </div>
          </div>
          
          <div className="activities-actions">
            <RecentActivities />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;