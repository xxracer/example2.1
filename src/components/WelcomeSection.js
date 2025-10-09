import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-text-content">
          <h2 className="welcome-title">Building Champions On and Off the Mats</h2>
          <p className="welcome-seo-text">
            At Reign Jiu Jitsu, we believe in building champions on and off the mats. Our mission is to provide world-class training in Jiu Jitsu in Katy, TX, creating an environment where students of all ages can thrive. Whether you’re searching for Jiu Jitsu near me for adults, kids Jiu Jitsu near me, or family martial arts, Reign Jiu Jitsu is your destination.
          </p>
          <div className="brush-separator"></div>
        </div>
        <div className="welcome-image-wrapper">
          <img src="https://placehold.co/1200x450?text=Group+photo+of+students" alt="Group of mixed-age students on the mats" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;