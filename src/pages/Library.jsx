import React, { useState } from 'react';
import './Library.css';

const Library = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Introduction to Algorithms', author: 'Cormen et al.', status: 'Available' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', status: 'Issued', issuedTo: 'Rajesh Kumar', dueDate: '2025-11-15' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin', status: 'Available' },
  ]);

  const handleIssueBook = (bookId, studentName) => {
    // In a real app, this would be a database transaction
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, status: 'Issued', issuedTo: studentName, dueDate: '2025-12-01' } : book
      )
    );
    alert(`Book ID ${bookId} issued to ${studentName}.`);
  };

  return (
    <div className="library-container">
      <h2 className="library-title">Library Management</h2>
      <p className="library-subtitle">Real-time tracking of book availability and issued records.</p>
      
      <table className="books-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Issued To</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <span className={`book-status-badge ${book.status.toLowerCase()}`}>
                  {book.status}
                </span>
              </td>
              <td>{book.issuedTo || 'N/A'}</td>
              <td>{book.dueDate || 'N/A'}</td>
              <td>
                {book.status === 'Available' && (
                  <button onClick={() => handleIssueBook(book.id, 'Priya Sharma')} className="issue-button">
                    Issue Book
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

export default Library;
