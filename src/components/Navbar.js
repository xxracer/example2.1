import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="navbar-logo">
        <Link to="/">REIGN BJJ</Link>
      </div>
      <ul className="navbar-links">
        <li className="dropdown">
          <a href="#programs" onClick={(e) => e.preventDefault()}>Programs</a>
          <ul className="dropdown-menu">
            <li><Link to="/kids-program">Kids Program</Link></li>
            <li><Link to="/homeschool-program">Homeschool Program</Link></li>
            <li><Link to="/adult-program">Adult Program</Link></li>
            <li><Link to="/fundamentals-program">Fundamentals Program</Link></li>
            <li><Link to="/competition-training">Competition Training</Link></li>
            <li><Link to="/private-lessons">Private Lessons</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li className="dropdown">
          <a href="#more" onClick={(e) => e.preventDefault()}>More</a>
          <ul className="dropdown-menu">
            <li><Link to="/facility">Our Facility</Link></li>
            <li><Link to="/affiliate-schools">Affiliate Schools</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About / Our Method</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;