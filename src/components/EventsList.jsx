import React from 'react';

// Import the component-specific CSS
import './EventsList.css';

const EventsList = () => {
  const upcomingEvents = [
    { title: "Maths Exam", date: "27 Oct 2025" },
    { title: "DS Project Deadline", date: "28 Oct 2025" },
    { title: "Dance Event", date: "29 Oct 2025" },
    { title: "Google Office Tour", date: "3 Nov 2025" },
  ];

  return (
    <div className="info-card events-list">
      <h3>Upcoming Events</h3>
      <ul>
        {upcomingEvents.map((event, index) => (
          <li key={index} className="event-item">
            <span>{event.title}</span>
            <span className="event-date">{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;