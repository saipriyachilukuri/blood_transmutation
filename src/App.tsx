import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BloodTransfusionDashboard from './pages/BloodTransfusionDashboard';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import { Toaster } from './components/ui/toaster';
import Footer from './components/ui/Footer';
import Navigation from './components/Navigation'; // ✅ Import Navigation

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation /> {/* ✅ Always visible */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/converter" element={<BloodTransfusionDashboard />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
