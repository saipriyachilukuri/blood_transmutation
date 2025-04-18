
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BloodTransfusionDashboard from './pages/BloodTransfusionDashboard';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BloodTransfusionDashboard />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
