import React from 'react';
import './Timetable.css';

const Timetable = () => {
  const schedule = [
    { day: 'Monday', time: '9:00 AM - 10:00 AM', subject: 'Data Structures', room: 'C201' },
    { day: 'Monday', time: '10:00 AM - 11:00 AM', subject: 'Operating Systems', room: 'C202' },
    { day: 'Tuesday', time: '9:00 AM - 10:00 AM', subject: 'Computer Networks', room: 'C201' },
    { day: 'Tuesday', time: '10:00 AM - 11:00 AM', subject: 'Database Management', room: 'C203' },
    { day: 'Wednesday', time: '9:00 AM - 10:00 AM', subject: 'Algorithms', room: 'C204' },
    { day: 'Wednesday', time: '10:00 AM - 11:00 AM', subject: 'Web Development', room: 'Lab-A' },
  ];

  const daysOfWeek = [...new Set(schedule.map(item => item.day))];

  return (
    <div className="timetable-container">
      <h2 className="timetable-title">Class Timetable</h2>
      <p className="timetable-subtitle">View the weekly class schedule at a glance.</p>

      <div className="timetable-grid">
        {daysOfWeek.map(day => (
          <div key={day} className="day-column">
            <h3 className="day-header">{day}</h3>
            {schedule.filter(item => item.day === day).map((lesson, index) => (
              <div key={index} className="lesson-card">
                <div className="lesson-time">{lesson.time}</div>
                <div className="lesson-subject">{lesson.subject}</div>
                <div className="lesson-room">Room: {lesson.room}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
