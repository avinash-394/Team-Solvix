import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiUsers, FiCalendar, FiFileText, FiBookOpen, FiCreditCard, FiBell, FiTruck, FiHelpCircle, FiHome } from 'react-icons/fi';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <FiGrid />, path: '/' },
    { name: 'Students', icon: <FiUsers />, path: '/students' },
    { name: 'Attendance', icon: <FiCalendar />, path: '/attendance' },
    // ... add all your other menu items here
  ];

  return (
    <div className="w-64 bg-white shadow-lg flex-shrink-0">
      <div className="p-6 text-2xl font-bold text-violet-700 border-b">
        🧠 SOLVIX
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2.5 rounded-lg text-gray-600 hover:bg-violet-100 hover:text-violet-700 transition-colors duration-200 ${
                isActive ? 'bg-violet-200 text-violet-800 font-semibold' : ''
              }`
            }
          >
            <span className="text-xl mr-3">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
