import React from 'react';

// NOTE: This is a styled placeholder. For a real chart, install a library like 'recharts'.
// --> npm install recharts
const LineChartCard = ({ title, data }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full">
      <h3 className="font-semibold text-slate-200 mb-4">{title}</h3>
      <div className="flex items-center justify-center h-64 bg-slate-900/50 rounded-md">
        <p className="text-slate-400">
          Line Chart Placeholder
        </p>
      </div>
    </div>
  );
};

export default LineChartCard;