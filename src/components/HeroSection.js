import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0.1);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        // The effect should complete over most of the hero section's height.
        // Using 80% of the height provides a good transition distance.
        const transitionDistance = heroRef.current.offsetHeight * 0.8;

        const startOpacity = 0.1; // Start with a very light tint
        const endOpacity = 0.85;   // End with a darker, but not fully opaque, tint

        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.min(scrollY / transitionDistance, 1);

        // Interpolate opacity based on scroll progress
        const newOpacity = startOpacity + scrollProgress * (endOpacity - startOpacity);

        setOverlayOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

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