import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // 1000 milliseconds = 1 second

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures this effect runs only once on mount

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
    hour12: true, // Use AM/PM format
  });

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">WELCOME <span className="highlight">AYUSH!</span></h1>
        <p className="header-date">Today is {formattedDate}</p>
        <p className="header-time">{formattedTime}</p>
      </div>
      <div className="header-right">
        <div className="profile-container">
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
            <span className="profile-name">AYUSH SHUKLA</span>
            <span className="profile-role">Student</span>
          </div>
          <div className="profile-dropdown-arrow">
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
        </div>
      </div>
    </header>
  );
};

export default Header;