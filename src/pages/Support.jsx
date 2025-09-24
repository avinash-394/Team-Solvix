import React, { useState } from 'react';
import './Support.css';

const Support = () => {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, this would send the ticket to a support system
      console.log('Support ticket submitted:', query);
      setSubmitted(true);
      setQuery('');
    }
  };

  return (
    <div className="support-container">
      <h2 className="support-title">Support & Help Center</h2>
      <p className="support-subtitle">Find answers or submit a support ticket for assistance.</p>
      
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>How do I check my fees status?</h4>
          <p>Navigate to the "Fees & Payments" section. Your current balance and payment history are displayed there.</p>
        </div>
        <div className="faq-item">
          <h4>I can't access my timetable. What should I do?</h4>
          <p>Ensure you are logged in with your correct student ID. If the issue persists, submit a support ticket below.</p>
        </div>
      </div>

      <div className="ticket-section">
        <h3>Submit a Support Ticket</h3>
        <form onSubmit={handleSubmit} className="ticket-form">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your issue in detail..."
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-button">Submit Ticket</button>
        </form>
        {submitted && (
          <p className="success-message">Thank you! Your ticket has been submitted. A support representative will contact you shortly.</p>
        )}
      </div>
    </div>
  );
};

export default Support;
