import React from 'react';

// NOTE: This is a styled placeholder. For a real chart, install a library like 'recharts'.
// --> npm install recharts
const PieChartCard = ({ title, data }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full">
      <h3 className="font-semibold text-slate-200 mb-4">{title}</h3>
      <div className="flex items-center justify-center h-64">
        <p className="text-slate-400">
          Pie Chart Placeholder
          <br />
          <span className="text-sm">(Install a library like Recharts)</span>
        </p>
      </div>
      <div className="flex justify-center space-x-4 text-sm mt-4">
        {data.map(item => (
          <div key={item.name} className="flex items-center">
            <span style={{ backgroundColor: item.color }} className="w-3 h-3 rounded-full mr-2"></span>
            <span className="text-slate-300">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartCard;