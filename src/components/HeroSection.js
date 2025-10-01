import React from 'react';
import './HeroSection.css';
import CircularText from './CircularText'; // Import the new circular text component

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src="/videos/reign.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
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