import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import CircularText from './CircularText'; // Import the new circular text component

const HeroSection = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0.1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400; // The scroll distance over which the effect happens
      const newOpacity = Math.min(0.7, 0.1 + (scrollY / maxScroll) * 0.6);
      setOverlayOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src="/videos/reign.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay" style={{ backgroundColor: 'rgba(84, 84, 84, ' + overlayOpacity + ')' }}></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-main-title">Katy’s Premier Jiu Jitsu Academy – Programs for Kids, Adults, and Families</h1>
        <CircularText />
        <button className="hero-cta-button">Book Your Trial Class</button>
      </div>
    </section>
  );
};

export default HeroSection;