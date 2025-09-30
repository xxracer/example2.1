import React from 'react';
import './HeroSection.css';

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
        <h1 className="hero-main-title">Train to Reign at Reign Jiu Jitsu</h1>
        <p className="hero-subtitle">
          The premier Jiu Jitsu academy in Katy, TX. Whether you’re looking for BJJ Katy, self-defense training, or a supportive martial arts community, our programs are designed for kids, adults, and families.
        </p>
        <button className="hero-cta-button">Book a Free Trial</button>
      </div>
    </section>
  );
};

export default HeroSection;