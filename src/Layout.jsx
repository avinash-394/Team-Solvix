import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// This component defines the consistent structure: Sidebar on the left, Header on top,
// and the main content area where different pages will be rendered.

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar is always visible */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header is always visible */}
        <Header />

        {/* Main content area where routed pages will be displayed */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* The Outlet component renders the matched child route's component */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;