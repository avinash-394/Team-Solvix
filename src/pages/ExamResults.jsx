import React, { useState } from 'react';
import './ExamResults.css';

const ExamResults = () => {
  const [results, setResults] = useState([
    { id: 101, name: 'Priya Sharma', rollNo: 'CSE101', marks: { 'Math': 95, 'Physics': 88, 'Chemistry': 91 } },
    { id: 102, name: 'Rajesh Kumar', rollNo: 'ECE102', marks: { 'Math': 78, 'Electronics': 85, 'Physics': 80 } },
    { id: 103, name: 'Anjali Singh', rollNo: 'ME103', marks: { 'Thermodynamics': 90, 'Fluid Mechanics': 85, 'Manufacturing': 92 } },
  ]);

  const [studentId, setStudentId] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const foundStudent = results.find(s => s.rollNo.toLowerCase() === studentId.toLowerCase());
    setSelectedStudent(foundStudent);
  };

  return (
    <div className="exams-container">
      <h2 className="exams-title">Exam Results</h2>
      <p className="exams-subtitle">Search and view student examination performance.</p>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Enter Student Roll Number (e.g., CSE101)"
          required
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {selectedStudent ? (
        <div className="results-card">
          <h3>Results for {selectedStudent.name} ({selectedStudent.rollNo})</h3>
          <table className="results-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedStudent.marks).map(([subject, mark]) => (
                <tr key={subject}>
                  <td>{subject}</td>
                  <td>{mark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-results-message">Please enter a student roll number to view results.</p>
      )}
    </div>
  );
};

export default ExamResults;
