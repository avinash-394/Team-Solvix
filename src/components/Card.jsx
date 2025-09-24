import React from 'react';

const Card = ({ title, value, color }) => {
  return (
    <div className={`p-6 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}>
      <div className="text-sm uppercase tracking-wider">{title}</div>
      <div className="text-4xl font-bold mt-2">{value}</div>
    </div>
  );
};

export default Card;