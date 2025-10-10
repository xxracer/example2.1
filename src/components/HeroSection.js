import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0.1);
  const heroRef = useRef(null);

  useEffect(() => {
    const welcomeSection = document.getElementById('welcome-section');

    const handleScroll = () => {
      if (welcomeSection) {
        const scrollY = window.scrollY;
        // The point where the welcome section's top aligns with the navbar
        const transitionEnd = welcomeSection.offsetTop - 80; // 80 is approx navbar height

        const startOpacity = 0.1; // Start with a very light tint
        const endOpacity = 0.85;  // End with a darker, but not fully opaque, tint

        // Calculate scroll progress (from 0 to 1)
        // This ensures the animation completes exactly when the welcome section is reached
        const scrollProgress = Math.min(scrollY / transitionEnd, 1);

        // Interpolate opacity based on scroll progress
        const newOpacity = startOpacity + scrollProgress * (endOpacity - startOpacity);

        setOverlayOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-video-wrapper">
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src="/videos/reign.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay" style={{ backgroundColor: `rgba(84, 84, 84, ${overlayOpacity})` }}></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-main-title">Katy’s Premier Jiu Jitsu Academy – Programs for Kids, Adults, and Families</h1>
        <p className="hero-sub-text">Jiu Jitsu - Kids Jiu Jitsu - Personal Training - Private Training</p>
        <button className="hero-cta-button">Book Your Trial Class</button>
      </div>
    </section>
  );
};

export default HeroSection;