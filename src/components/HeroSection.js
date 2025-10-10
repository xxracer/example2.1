import React from 'react';
import './HeroSection.css';

const HeroSection = ({ videoOpacity }) => {
  return (
    <section className="hero-section">
      <div className="hero-video-wrapper" style={{ opacity: videoOpacity }}>
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src="/videos/reign.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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