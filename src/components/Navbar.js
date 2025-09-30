import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="main-navbar">
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