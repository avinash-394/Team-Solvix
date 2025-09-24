import React, { useState } from 'react';
import './Studentspage.css';

const StudentsPage = () => {
  const [students, setStudents] = useState([
    { id: 101, name: 'Priya Sharma', rollNo: 'CSE101', email: 'priya@example.com', program: 'Computer Science', status: 'Active' },
    { id: 102, name: 'Rajesh Kumar', rollNo: 'ECE102', email: 'rajesh@example.com', program: 'Electronics', status: 'Active' },
    { id: 103, name: 'Anjali Singh', rollNo: 'ME103', email: 'anjali@example.com', program: 'Mechanical Engineering', status: 'Graduated' },
    { id: 104, name: 'Sandeep Varma', rollNo: 'CE104', email: 'sandeep@example.com', program: 'Civil Engineering', status: 'Active' },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', rollNo: '', email: '', program: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.rollNo) return;
    const studentWithId = { ...newStudent, id: students.length + 101, status: 'Active' };
    setStudents(prevStudents => [...prevStudents, studentWithId]);
    setNewStudent({ name: '', rollNo: '', email: '', program: '' });
  };

  return (
    <div className="students-container">
      <h2 className="students-title">Student Database</h2>
      <p className="students-subtitle">Centralized student information for seamless data flow.</p>

      {/* Admission Intake Form */}
      <div className="form-section">
        <h3>New Student Admission</h3>
        <form onSubmit={handleAddStudent} className="add-student-form">
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            placeholder="Student Name"
            required
          />
          <input
            type="text"
            name="rollNo"
            value={newStudent.rollNo}
            onChange={handleInputChange}
            placeholder="Roll Number"
            required
          />
          <input
            type="email"
            name="email"
            value={newStudent.email}
            onChange={handleInputChange}
            placeholder="Email Address"
          />
          <input
            type="text"
            name="program"
            value={newStudent.program}
            onChange={handleInputChange}
            placeholder="Program"
          />
          <button type="submit" className="add-button">Add Student</button>
        </form>
      </div>

      {/* Student List */}
      <div className="list-section">
        <h3>Student List</h3>
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Program</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.program}</td>
                <td><span className={`status-badge ${student.status.toLowerCase()}`}>{student.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
