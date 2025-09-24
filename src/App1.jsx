import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/Studentspage";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import ExamResults from "./pages/ExamResults";
import FeesPayments from "./pages/FeesPayments";
import Library from "./pages/Library"; // fix filename if typo
import Hostel from "./pages/Hostel";
import Notifications from "./pages/Notifications";
import Transport from "./pages/Transport";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/exams" element={<ExamResults />} />
            <Route path="/fees" element={<FeesPayments />} />
            <Route path="/library" element={<Library />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
