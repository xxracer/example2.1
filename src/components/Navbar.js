import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAdminPage = location.pathname === '/update-instructors';

  const handleDropdownClick = (e, dropdownName) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    closeMobileMenu();
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  // Handle navbar background change on scroll
  useEffect(() => {
    if (isAdminPage) {
      setIsScrolled(false); // Ensure no scroll effect on admin page
      return;
    }

    const handleScroll = () => {
      const welcomeSection = document.getElementById('welcome-section');
      if (welcomeSection) {
        // On homepage, change color when scrolling to the welcome section
        const rect = welcomeSection.getBoundingClientRect();
        setIsScrolled(rect.top <= 80); // 80 is approx navbar height
      } else {
        // On all other pages, the navbar is solid from the start
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isAdminPage]);

  const navClasses = [
    'main-navbar',
    isAdminPage ? 'navbar-admin' : '',
    isScrolled && !isAdminPage ? 'navbar-scrolled' : '',
    isMobileMenuOpen ? 'mobile-menu-active' : ''
  ].filter(Boolean).join(' ');

  const linksClasses = `navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`;

  return (
    <nav className={navClasses}>
      <div className="navbar-left">
        <ul className={linksClasses}>
          <li className="dropdown">
            <a href="#programs" onClick={(e) => handleDropdownClick(e, 'programs')}>Programs</a>
            <ul className={`dropdown-menu ${openDropdown === 'programs' ? 'open' : ''}`}>
              <li><Link to="/kids-program" onClick={closeMobileMenu}>Kids Program</Link></li>
              <li><Link to="/homeschool-program" onClick={closeMobileMenu}>Homeschool Program</Link></li>
              <li><Link to="/adult-program" onClick={closeMobileMenu}>Adult Program</Link></li>
              <li><Link to="/fundamentals-program" onClick={closeMobileMenu}>Fundamentals Program</Link></li>
              <li><Link to="/competition-training" onClick={closeMobileMenu}>Competition Training</Link></li>
              <li><Link to="/private-lessons" onClick={closeMobileMenu}>Private Lessons</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#schedule" onClick={(e) => handleDropdownClick(e, 'schedule')}>Schedule</a>
            <ul className={`dropdown-menu ${openDropdown === 'schedule' ? 'open' : ''}`}>
              <li><Link to="/instructors" onClick={closeMobileMenu}>Instructors</Link></li>
              <li><Link to="/facility" onClick={closeMobileMenu}>Our Facility</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#more" onClick={(e) => handleDropdownClick(e, 'more')}>More</a>
            <ul className={`dropdown-menu ${openDropdown === 'more' ? 'open' : ''}`}>
              <li><Link to="/affiliate-schools" onClick={closeMobileMenu}>Affiliate Schools</Link></li>
              <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu}>About / Our Method</Link></li>
              <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
              <li><Link to="/faq" onClick={closeMobileMenu}>FAQ</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-logo">
        <Link to="/">REIGN BJJ</Link>
      </div>
      <div className="navbar-right">
        <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;