import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isAdminPage = location.pathname === '/update-instructors';

  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const welcomeSection = document.getElementById('welcome-section');
      if (welcomeSection) {
        const { top } = welcomeSection.getBoundingClientRect();
        // Change background when the top of the welcome section is near the top of the viewport
        setIsScrolled(top <= 80);
      } else {
        // Fallback for other pages
        setIsScrolled(window.scrollY > 80);
      }
    };

    if (!isAdminPage) {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    } else {
      setIsScrolled(false); // Ensure no scroll effect on admin page
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isAdminPage]);

  const navClasses = [
    'main-navbar',
    isAdminPage ? 'navbar-admin' : '',
    isScrolled && !isAdminPage ? 'navbar-scrolled' : ''
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses}>
      <div className="navbar-left">
        <ul className="navbar-links">
          <li className="dropdown">
            <a href="#programs" onClick={() => handleDropdownClick('programs')}>Programs</a>
            <ul className={`dropdown-menu ${openDropdown === 'programs' ? 'open' : ''}`}>
              <li><Link to="/kids-program">Kids Program</Link></li>
              <li><Link to="/homeschool-program">Homeschool Program</Link></li>
              <li><Link to="/adult-program">Adult Program</Link></li>
              <li><Link to="/fundamentals-program">Fundamentals Program</Link></li>
              <li><Link to="/competition-training">Competition Training</Link></li>
              <li><Link to="/private-lessons">Private Lessons</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#schedule" onClick={() => handleDropdownClick('schedule')}>Schedule</a>
            <ul className={`dropdown-menu ${openDropdown === 'schedule' ? 'open' : ''}`}>
              <li><Link to="/instructors">Instructors</Link></li>
              <li><Link to="/facility">Our Facility</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#more" onClick={() => handleDropdownClick('more')}>More</a>
            <ul className={`dropdown-menu ${openDropdown === 'more' ? 'open' : ''}`}>
              <li><Link to="/affiliate-schools">Affiliate Schools</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About / Our Method</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-logo">
        <Link to="/">REIGN BJJ</Link>
      </div>
      <div className="navbar-right"></div>
    </nav>
  );
};

export default Navbar;