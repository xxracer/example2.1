import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#programs">Programs</a>
          <a href="#schedule">Schedule</a>
          <a href="#instructors">Instructors</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Reign Jiu Jitsu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;