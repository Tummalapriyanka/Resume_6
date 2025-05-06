
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginPage from '@/pages/LoginPage';
import JobSeekerDashboard from '@/pages/JobSeekerDashboard';
import EmployerDashboard from '@/pages/EmployerDashboard';
import JobTestPage from '@/pages/JobTestPage';
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

function App() {
  const { toast } = useToast();

  const [userType, setUserType] = React.useState(localStorage.getItem('userType') || null);
  const [currentTestJob, setCurrentTestJob] = React.useState(() => {
    const savedJob = localStorage.getItem('currentTestJob');
    return savedJob ? JSON.parse(savedJob) : null;
  });

  const handleLogin = (type) => {
    localStorage.setItem('userType', type);
    setUserType(type);
    toast({
      title: "Login Successful",
      description: `Welcome, ${type}!`,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('currentTestJob');
    setUserType(null);
    setCurrentTestJob(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const handleStartTest = (job) => {
    localStorage.setItem('currentTestJob', JSON.stringify(job));
    setCurrentTestJob(job);
  };

  const handleEndTest = () => {
    localStorage.removeItem('currentTestJob');
    setCurrentTestJob(null);
  }

  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col"
      >
        <Routes>
          <Route
            path="/login"
            element={userType ? <Navigate to={`/${userType}-dashboard`} replace /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/job-seeker-dashboard"
            element={userType === 'job-seeker' ? <JobSeekerDashboard onLogout={handleLogout} onStartTest={handleStartTest} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/employer-dashboard"
            element={userType === 'employer' ? <EmployerDashboard onLogout={handleLogout} /> : <Navigate to="/login" replace />}
          />
          <Route 
            path="/test/:jobId"
            element={userType === 'job-seeker' && currentTestJob ? <JobTestPage job={currentTestJob} onEndTest={handleEndTest} /> : <Navigate to="/job-seeker-dashboard" replace />}
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </motion.div>
      <Toaster />
    </Router>
  );
}

export default App;
  