import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HealthTracking from './pages/HealthTracking';
import AIAnalysis from './pages/AIAnalysis';
import ExpertCare from './pages/ExpertCare';
import DietPlans from './pages/DietPlans';
import AuthPage from './pages/Auth/AuthPage';
import LearnMore from './pages/LearnMore';
import ReturnToTop from './components/ReturnToTop';
import MouseFollower from './components/MouseFollower';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <MouseFollower />
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Testimonials />
            </main>
          } />
          <Route path="/health-tracking" element={<HealthTracking />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/ai-analysis/learn-more" element={<LearnMore />} />
          <Route path="/expert-care" element={<ExpertCare />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<Navigate to="/auth" />} />
          <Route path="/signup" element={<Navigate to="/auth" state={{ isSignUp: false }} />} />
        </Routes>
        <Footer />
        <ReturnToTop />
      </div>
    </Router>
  );
}

export default App;