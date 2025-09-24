import React, { useState } from 'react';
import './Attendance.css';

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 101, name: 'Priya Sharma', present: true },
    { id: 102, name: 'Rajesh Kumar', present: false },
    { id: 103, name: 'Anjali Singh', present: true },
    { id: 104, name: 'Sandeep Varma', present: true },
  ]);

  const toggleAttendance = (id) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const attendanceDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="attendance-container">
      <h2 className="attendance-title">Daily Attendance</h2>
      <p className="attendance-subtitle">Mark and track attendance for today's class.</p>

      <div className="attendance-info-card">
        <p className="date-display">Date: <span>{attendanceDate}</span></p>
        <p className="class-display">Class: <span>B.Tech CSE - 2nd Year</span></p>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={student.present}
                    onChange={() => toggleAttendance(student.id)}
                  />
                  <span className="slider round"></span>
                </label>
                <span className={`status-text ${student.present ? 'present' : 'absent'}`}>
                  {student.present ? 'Present' : 'Absent'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
