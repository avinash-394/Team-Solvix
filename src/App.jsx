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
import Timetable from "./pages/Timetable";
import FeesPayments from "./pages/FeesPayments";
import Layout from "./components/Layout";

// STEP 1: Import the main CSS file here
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <main>
          <Layout>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/library" element={<Library />} />
            <Route path="/exams" element={<ExamResults />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/fees" element={<FeesPayments />} />
            <Route path="/support" element={<Support />} />
            </Routes>
            </Layout>
          </main>
    </BrowserRouter>
  );
}

export default App;