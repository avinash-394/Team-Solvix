import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Fee payment deadline extended to 30th November.', date: '2025-10-25' },
    { id: 2, text: 'New class schedule for exams has been published.', date: '2025-10-24' },
    { id: 3, text: 'Hostel registration for new students is now open.', date: '2025-10-22' },
  ]);

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>
      <p className="notifications-subtitle">Important announcements and updates for students and staff.</p>

      <ul className="notifications-list">
        {notifications.map(notification => (
          <li key={notification.id} className="notification-item">
            <div className="notification-content">{notification.text}</div>
            <div className="notification-date">{notification.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
