import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Mock data to simulate fetching from a central database
  const [dashboardData, setDashboardData] = useState({
    totalStudents: 1542,
    attendance: 85.3,
    feesCollected: 75,
    hostelOccupancy: 92,
  });

  // useEffect to simulate data updates (e.g., from a cloud-based spreadsheet)
  useEffect(() => {
    // In a real-world scenario, this would be a fetch call to a backend API
    // or a listener to a Firestore database.
    const interval = setInterval(() => {
      setDashboardData(prevData => ({
        ...prevData,
        // Simulate real-time changes
        attendance: Math.min(100, (Math.random() * 2 + 84).toFixed(1)),
        feesCollected: Math.min(100, prevData.feesCollected + Math.random() * 1),
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Administrative Dashboard</h2>
      <p className="dashboard-subtitle">A real-time overview of key institutional metrics.</p>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-value">{dashboardData.totalStudents}</div>
          <div className="metric-label">Total Students</div>
          <div className="metric-description">As per the integrated student database.</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">{dashboardData.attendance.toFixed(1)}%</div>
          <div className="metric-label">Average Attendance</div>
          <div className="metric-description">Live data from daily attendance submissions.</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">{dashboardData.feesCollected.toFixed(0)}%</div>
          <div className="metric-label">Fees Collected</div>
          <div className="metric-description">Progress against total payable fees.</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">{dashboardData.hostelOccupancy}%</div>
          <div className="metric-label">Hostel Occupancy</div>
          <div className="metric-description">Real-time room allocation status.</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
