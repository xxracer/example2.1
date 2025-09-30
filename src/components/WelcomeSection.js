import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-text-content">
          <h2 className="welcome-title">Welcome to Reign Jiu Jitsu – Katy, TX</h2>
          <p className="welcome-seo-text">
            Reign Jiu Jitsu is a premier family-friendly martial arts academy located in Katy, Texas.
            Our mission is to provide expert Brazilian Jiu Jitsu training that promotes discipline,
            confidence, and physical fitness. Whether you’re a beginner or a competitor, we challenge
            and encourage each student to reach their full potential through a supportive community
            environment. Join us for our introductory class and begin your transformative Jiu Jitsu journey today!
          </p>
          <div className="brush-separator"></div>
        </div>
        <div className="welcome-image-wrapper">
          <img src="https://placehold.co/1200x450?text=Welcome+Image" alt="Family training at Reign Jiu Jitsu" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;