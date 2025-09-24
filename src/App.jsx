import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Header from './components/Header'; // You'll need the Header for the full layout
import Dashboard from "./pages/Dashboard";

// STEP 1: Import the main CSS file here
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* STEP 2: Use the new class name from App.css */}
      <div className="app-container"> 
        <Sidebar />
        
        {/* Use the new class name here too */}
        <div className="main-content"> 
          <Header />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;