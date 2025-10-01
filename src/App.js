import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import UpdateInstructors from './pages/UpdateInstructors';

// This new component handles the layout and scroll effects based on the current route
const AppLayout = () => {
  const [appClassName, setAppClassName] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const welcomeSection = document.getElementById('welcome-section');
      let newClassName = '';

      if (welcomeSection) {
        const rect = welcomeSection.getBoundingClientRect();
        const navbarHeight = 80; // Approximate height of the navbar
        const topPassed = rect.top <= navbarHeight;
        const bottomPassed = rect.bottom <= navbarHeight;

        if (topPassed && !bottomPassed) {
          newClassName = 'scrolled'; // Black navbar
        } else if (bottomPassed) {
          newClassName = 'scrolled-past'; // White navbar
        }
      } else {
        // Fallback for pages without a welcome section (makes navbar white on scroll)
        newClassName = window.scrollY > 50 ? 'scrolled-past' : '';
      }

      if (newClassName !== appClassName) {
        setAppClassName(newClassName);
      }
    };

    if (location.pathname === '/update-instructors') {
      // Force white navbar on admin page and disable scroll listener
      setAppClassName('scrolled-past');
      window.removeEventListener('scroll', handleScroll);
    } else {
      // Add scroll listener for all other pages
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Set initial state
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // Re-run effect when the page route changes

  return (
    <div className={`App ${appClassName}`}>
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
          <Route path="/update-instructors" element={<UpdateInstructors />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;