import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const rotatingTexts = ["Jiu Jitsu", "Kids Jiu Jitsu", "Personal Training", "Private Training"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video autoPlay loop muted playsInline className="hero-video-bg">
          {/* The video source now points to the correct local file in the public/videos directory */}
          <source src="/videos/reign.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <p className="hero-rotating-text">{rotatingTexts[currentIndex]}</p>
        <h1 className="hero-main-title">Katy’s Premier Family Friendly Jiu Jitsu</h1>
        <button className="hero-cta-button">Book a Free Trial</button>
      </div>
    </section>
  );
};

export default HeroSection;