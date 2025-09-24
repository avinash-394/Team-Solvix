import React from "react";
import "./Dashboard.css";

// Import the new detailed components
import ProjectsList from "../components/ProjectsList";
import EventsList from "../components/EventsList";
import FeeStatusTable from "../components/FeeStatusTable";
import PieChartCard from "../components/PieChartCard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Reusable Stat Card
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
  // ✅ Sample data for PieChart
  const attendanceData = [
    { name: "Present", value: 85, color: "#4CAF50" },
    { name: "Absent", value: 10, color: "#F44336" },
    { name: "Exempt", value: 5, color: "#FFC107" },
  ];

  // ✅ Sample data for LineChart
  const lineData = [
    { day: "8th", CSE14: 40, CSE15: 30, CSE16: 20 },
    { day: "9th", CSE14: 50, CSE15: 35, CSE16: 25 },
    { day: "10th", CSE14: 60, CSE15: 45, CSE16: 35 },
    { day: "11th", CSE14: 30, CSE15: 20, CSE16: 15 },
    { day: "12th", CSE14: 70, CSE15: 55, CSE16: 45 },
    { day: "13th", CSE14: 50, CSE15: 40, CSE16: 30 },
    { day: "14th", CSE14: 80, CSE15: 65, CSE16: 55 },
    { day: "15th", CSE14: 90, CSE15: 75, CSE16: 65 },
    { day: "16th", CSE14: 70, CSE15: 55, CSE16: 40 },
    { day: "17th", CSE14: 85, CSE15: 70, CSE16: 50 },
  ];

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
        {/* ✅ PieChartCard */}
        <PieChartCard title="Attendance Overview" data={attendanceData} />

        {/* ✅ LineChart */}
        <InfoCard title="Class Performance Trends">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="CSE14" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="CSE15" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="CSE16" stroke="#ffc658" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </InfoCard>
      </div>

      {/* Bottom Row: Reusable Components */}
      <div className="bottom-grid">
        <ProjectsList />
        <EventsList />
        <FeeStatusTable />
      </div>
    </div>
  );
};

export default Dashboard;