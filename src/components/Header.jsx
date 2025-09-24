import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white border-b sticky top-0 z-10 rounded-xl">
      <div className="flex items-center space-x-4">
        
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">WELCOME AYUSH!</h1>
          <p className="text-sm text-gray-500">Today is Monday, 26 Oct 2025</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        
        
        <div className="flex items-center space-x-2">
          
          <div className="flex flex-col">
            
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
