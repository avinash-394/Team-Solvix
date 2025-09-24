import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">WELCOME AYUSH!</h1>
        <p className="text-sm text-gray-500">Today is Monday, 26 Oct 2025</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        
        <div className="flex items-center">
           <img 
             src="https://placehold.co/40x40/E2E8F0/4A5568?text=AS" 
             alt="User" 
             className="w-10 h-10 rounded-full mr-3 border-2 border-violet-200"
           />
           <div>
             <div className="font-semibold text-gray-800">AYUSH SHUKLA</div>
             <div className="text-sm text-gray-500">Student</div>
           </div>
        </div>
      </div>
    </header>
  );
};

// You should add this Header to your main App layout to see it.
// Example App.jsx update:
/*
function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
*/


export default Header;
