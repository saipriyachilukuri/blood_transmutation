
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BloodTransfusionDashboard from './pages/BloodTransfusionDashboard';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/converter" element={<BloodTransfusionDashboard />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
