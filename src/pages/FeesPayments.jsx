import React, { useState } from 'react';
import './FeesPayments.css';

const FeesPayments = () => {
  const [students, setStudents] = useState([
    { id: 101, name: 'Priya Sharma', rollNo: 'CSE101', totalFee: 50000, paid: 50000, balance: 0 },
    { id: 102, name: 'Rajesh Kumar', rollNo: 'ECE102', totalFee: 50000, paid: 35000, balance: 15000 },
    { id: 103, name: 'Anjali Singh', rollNo: 'ME103', totalFee: 50000, paid: 50000, balance: 0 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter(student =>
    student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePayFee = (studentId) => {
    // In a real app, this would update the backend database.
    // For this demo, we'll mark the student as paid.
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, paid: student.totalFee, balance: 0 } : student
      )
    );
    alert(`Fee for student ID ${studentId} marked as paid. A digital receipt has been generated.`);
  };

  return (
    <div className="fees-container">
      <h2 className="fees-title">Fee Collection and Receipts</h2>
      <p className="fees-subtitle">Automated fee receipting and status tracking.</p>

      <div className="fees-controls">
        <input
          type="text"
          placeholder="Search by Roll No. or Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <table className="fees-table">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Student Name</th>
            <th>Total Fee</th>
            <th>Paid</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>₹{student.totalFee}</td>
              <td>₹{student.paid}</td>
              <td>₹{student.balance}</td>
              <td>
                <span className={`fee-status-badge ${student.balance === 0 ? 'paid' : 'pending'}`}>
                  {student.balance === 0 ? 'Paid' : 'Pending'}
                </span>
              </td>
              <td>
                {student.balance > 0 && (
                  <button onClick={() => handlePayFee(student.id)} className="pay-button">
                    Pay Fee
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeesPayments;
