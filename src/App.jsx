import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import FreelancerDashboard from './pages/FreelancerDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JobMarketplace from './pages/JobMarketplace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
          <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<JobMarketplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;