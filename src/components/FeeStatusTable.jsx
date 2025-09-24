import React from 'react';

// Import the component-specific CSS
import './FeeStatusTable.css';

const FeeStatusTable = () => {
  const feeStatus = [
    { name: "College", status: "Paid" },
    { name: "Library", status: "Paid" },
    { name: "Hostel", status: "Paid" },
    { name: "Transport", status: "Pending" },
  ];

  return (
    <div className="info-card">
      <h3>Fee Payment Status</h3>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {feeStatus.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <span 
                  className={`status-badge ${
                    item.status === 'Paid' ? 'status-paid' : 'status-pending'
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeStatusTable;  