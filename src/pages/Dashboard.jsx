import React from 'react';

// Import the page-specific CSS
import './Dashboard.css';

// Import the new detailed components
import ProjectsList from '../components/ProjectsList';
import EventsList from '../components/EventsList';
import FeeStatusTable from '../components/FeeStatusTable';

// Reusable components for the dashboard page
const StatCard = ({ title, value }) => (
  <div className="stat-card">
    <div className="stat-card-title">{title}</div>
    <div className="stat-card-value">{value}</div>
  </div>
);

const InfoCard = ({ title, children }) => (
    <div className="info-card">
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      {/* Top Row: Stat Cards */}
      <div className="stats-grid">
        <StatCard title="Total Students" value="80" />
        <StatCard title="Today Classes" value="08" />
        <StatCard title="Class Attendance" value="91%" />
        <StatCard title="Upcoming Exams" value="03" />
      </div>

      {/* Middle Row: Charts */}
      <div className="charts-grid">
        <InfoCard title="Attendance Overview">
            <div className="placeholder-box">
                <p>Pie Chart Placeholder<br/><small>(Install a library like Recharts)</small></p>
            </div>
        </InfoCard>
        <InfoCard title="Class Performance Trends">
            <div className="placeholder-box">
                <p>Line Chart Placeholder</p>
            </div>
        </InfoCard>
      </div>

      {/* Bottom Row: USE THE NEW COMPONENTS HERE */}
      <div className="bottom-grid">
        <ProjectsList />
        <EventsList />
        <FeeStatusTable />
      </div>
    </div>
  );
};

export default Dashboard;