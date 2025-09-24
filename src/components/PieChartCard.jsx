import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartCard = ({ title, data }) => {
  return (
    // Use the generic 'info-card' class for consistent light-theme styling
    <div className="info-card">
      <h3>{title}</h3>

      {/* Responsive container ensures the chart fits the card */}
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            {/* Tooltip shows details on hover */}
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.5rem', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
              }}
            />

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              // This creates the "donut" hole in the middle
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5} // Adds a little space between slices
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            
            {/* The Legend displays the name for each color below the chart */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartCard;