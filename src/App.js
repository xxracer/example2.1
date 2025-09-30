import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import core layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import page components
import HomePage from './pages/HomePage';
import KidsProgram from './pages/KidsProgram';
import HomeschoolProgram from './pages/HomeschoolProgram';
import AdultProgram from './pages/AdultProgram';
import FundamentalsProgram from './pages/FundamentalsProgram';
import CompetitionTraining from './pages/CompetitionTraining';
import PrivateLessons from './pages/PrivateLessons';
import Schedule from './pages/Schedule';
import Instructors from './pages/Instructors';
import OurFacility from './pages/OurFacility';
import AffiliateSchools from './pages/AffiliateSchools';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeSection = document.getElementById('welcome-section');
      if (welcomeSection) {
        // Add .scrolled class when the top of the welcome section reaches the top of the viewport
        const isScrolled = welcomeSection.getBoundingClientRect().top <= 0;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      } else {
        // Fallback for other pages: add .scrolled after scrolling 50px
        const isScrolled = window.scrollY > 50;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Router>
      <div className={`App ${scrolled ? 'scrolled' : ''}`}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kids-program" element={<KidsProgram />} />
            <Route path="/homeschool-program" element={<HomeschoolProgram />} />
            <Route path="/adult-program" element={<AdultProgram />} />
            <Route path="/fundamentals-program" element={<FundamentalsProgram />} />
            <Route path="/competition-training" element={<CompetitionTraining />} />
            <Route path="/private-lessons" element={<PrivateLessons />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/facility" element={<OurFacility />} />
            <Route path="/affiliate-schools" element={<AffiliateSchools />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;