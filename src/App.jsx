import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Header from './components/Header'; // You'll need the Header for the full layout
import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/Studentspage";
import Attendance from "./pages/Attendance";
import ExamResults from "./pages/ExamResults";
import Support from "./pages/Support";
import Library from "./pages/Library"; 
import Transport from "./pages/Transport";
import Notifications from "./pages/Notifications";
import Hostel from "./pages/Hostel";
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
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/library" element={<Library />} />
            <Route path="/exams" element={<ExamResults />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/hostel" element={<Hostel />} />
            
            

            
            
            <Route path="/support" element={<Support />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;