// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  FiGrid,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiBookOpen,
  FiCreditCard,
  FiBell,
  FiTruck,
  FiHelpCircle,
  FiHome,
} from "react-icons/fi";
import logo from "/logo.png"; // make sure your logo.png is in src/assets

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FiGrid />, path: "/" },
    { name: "Students", icon: <FiUsers />, path: "/students" },
    { name: "Attendance", icon: <FiCalendar />, path: "/attendance" },
    { name: "Timetable", icon: <FiFileText />, path: "/timetable" },
    { name: "Exams", icon: <FiBookOpen />, path: "/exams" },
    { name: "Fees", icon: <FiCreditCard />, path: "/fees" },
    { name: "Library", icon: <FiBookOpen />, path: "/library" },
    { name: "Hostel", icon: <FiHome />, path: "/hostel" },
    { name: "Notifications", icon: <FiBell />, path: "/notifications" },
    { name: "Transport", icon: <FiTruck />, path: "/transport" },
    { name: "Support", icon: <FiHelpCircle />, path: "/support" },
  ];

  return (
    <div className="sidebar">
      {/* Header / Logo */}
      <div className="sidebar-header flex justify-center items-center py-4">
        <img src={logo} alt="Solvix Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-link-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
