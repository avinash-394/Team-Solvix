import React, { useState } from 'react';
import './Hostel.css';

const Hostel = () => {
  const [hostels, setHostels] = useState([
    { id: 1, name: 'Hostel A', totalRooms: 100, occupied: 92 },
    { id: 2, name: 'Hostel B', totalRooms: 80, occupied: 75 },
    { id: 3, name: 'Hostel C', totalRooms: 60, occupied: 50 },
  ]);

  const [allocation, setAllocation] = useState([
    { studentName: 'Priya Sharma', rollNo: 'CSE101', hostel: 'Hostel A', room: 'A-205' },
    { studentName: 'Rajesh Kumar', rollNo: 'ECE102', hostel: 'Hostel B', room: 'B-110' },
  ]);

  const [newAllocation, setNewAllocation] = useState({ studentName: '', rollNo: '', hostel: 'Hostel A', room: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAllocation(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAllocate = (e) => {
    e.preventDefault();
    if (!newAllocation.studentName || !newAllocation.rollNo || !newAllocation.room) {
      alert("Please fill all fields.");
      return;
    }
    // Simulate updating occupancy and adding to allocation list
    const updatedHostels = hostels.map(h => {
      if (h.name === newAllocation.hostel && h.occupied < h.totalRooms) {
        return { ...h, occupied: h.occupied + 1 };
      }
      return h;
    });
    setHostels(updatedHostels);
    setAllocation(prevAllocations => [...prevAllocations, newAllocation]);
    setNewAllocation({ studentName: '', rollNo: '', hostel: 'Hostel A', room: '' });
  };

  return (
    <div className="hostel-container">
      <h2 className="hostel-title">Hostel Occupancy & Allocation</h2>
      <p className="hostel-subtitle">Live tracking and management of hostel rooms.</p>

      {/* Hostel Occupancy Cards */}
      <div className="occupancy-grid">
        {hostels.map(hostel => (
          <div key={hostel.id} className="occupancy-card">
            <h3>{hostel.name}</h3>
            <div className="occupancy-value">{hostel.occupied} / {hostel.totalRooms}</div>
            <div className="occupancy-label">Occupancy: {((hostel.occupied / hostel.totalRooms) * 100).toFixed(0)}%</div>
          </div>
        ))}
      </div>

      {/* Allocation Form */}
      <div className="allocation-form-section">
        <h3>Allocate Room</h3>
        <form onSubmit={handleAllocate} className="allocation-form">
          <input type="text" name="studentName" value={newAllocation.studentName} onChange={handleInputChange} placeholder="Student Name" required />
          <input type="text" name="rollNo" value={newAllocation.rollNo} onChange={handleInputChange} placeholder="Roll Number" required />
          <select name="hostel" value={newAllocation.hostel} onChange={handleInputChange}>
            {hostels.map(h => <option key={h.id} value={h.name}>{h.name}</option>)}
          </select>
          <input type="text" name="room" value={newAllocation.room} onChange={handleInputChange} placeholder="Room No." required />
          <button type="submit" className="allocate-button">Allocate Room</button>
        </form>
      </div>

      {/* Current Allocation List */}
      <div className="allocation-list-section">
        <h3>Current Allocations</h3>
        <table className="allocation-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Roll No.</th>
              <th>Hostel</th>
              <th>Room No.</th>
            </tr>
          </thead>
          <tbody>
            {allocation.map((item, index) => (
              <tr key={index}>
                <td>{item.studentName}</td>
                <td>{item.rollNo}</td>
                <td>{item.hostel}</td>
                <td>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hostel;
