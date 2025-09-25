import React, { useState, useEffect } from 'react';
import './Header.css';

// Mock student data (can be replaced with actual user context)
const studentInfo = {
  name: "AYUSH SHUKLA",
  role: "Student",
  rollNo: "CSE21A007",
  program: "B.Tech Computer Science",
  email: "ayush.shukla@college.edu",
  hostel: "Hostel B, Room 210"
};

const ProfileCard = ({ info }) => (
  <div className="profile-dropdown-card">
    <div className="card-header">
      <span className="card-name">{info.name}</span>
      <span className="card-role">{info.role}</span>
    </div>
    <div className="card-body">
      <p><strong>Roll No:</strong> {info.rollNo}</p>
      <p><strong>Program:</strong> {info.program}</p>
      <p><strong>Email:</strong> {info.email}</p>
      <p><strong>Hostel:</strong> {info.hostel}</p>
    </div>
    <div className="card-footer">
      <button className="settings-button">Settings</button>
      <button className="logout-button">Logout</button>
    </div>
  </div>
);


const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  // New state to control the dropdown visibility
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []); 
  
  // Function to toggle the profile card
  const toggleProfile = () => {
    setIsProfileOpen(prev => !prev);
  };

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, 
  });

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">WELCOME <span className="highlight">AYUSH!</span></h1>
        <p className="header-date">Today is {formattedDate}</p>
        <p className="header-time">{formattedTime}</p>
      </div>
      <div className="header-right">
        {/* Add onClick handler to toggle the profile card */}
        <div 
          className="profile-container" 
          onClick={toggleProfile}
        >
          <div className="profile-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="user-icon"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="profile-details">
            <span className="profile-name">{studentInfo.name}</span>
            <span className="profile-role">{studentInfo.role}</span>
          </div>
          <div className={`profile-dropdown-arrow ${isProfileOpen ? 'open' : ''}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dropdown-icon"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          {/* Conditional rendering for the Profile Card */}
          {isProfileOpen && <ProfileCard info={studentInfo} />}
        </div>
      </div>
    </header>
  );
};

export default Header;