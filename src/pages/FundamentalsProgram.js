import React from 'react';
import './ProgramPage.css';

const FundamentalsProgram = () => {
  return (
    <div className="program-page">
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Fundamentals')" }}>
        <h1 className="program-hero-title">Fundamentals Program</h1>
      </section>

      <section className="program-intro">
        <p>
          Our Fundamentals Program is the perfect entry point for new students. We focus on the core movements, body positioning, and essential self-defense techniques that form the bedrock of the art.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Start Your Journey Here</h2>
          <p>
            This dedicated class environment ensures you learn safely and effectively, gaining the confidence needed to transition smoothly into the main Adult Program.
          </p>
          <ul>
            <li>- Introduction to both Gi and No-Gi styles</li>
            <li>- No fitness level required to start</li>
            <li>- Focus on core movements and body positioning</li>
            <li>- Learn essential self-defense techniques</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=Beginner+Class" alt="Beginners learning Jiu Jitsu" />
        </div>
      </section>

      <section className="benefits-grid">
        <div className="benefit-item">
          <h3>Safe Learning</h3>
          <p>A controlled and dedicated environment designed for those brand new to the art.</p>
        </div>
        <div className="benefit-item">
          <h3>Build Fitness</h3>
          <p>The program is designed to help you build fitness at your own pace as you learn.</p>
        </div>
        <div className="benefit-item">
          <h3>Core Concepts</h3>
          <p>Master the foundational techniques that all of Jiu Jitsu is built upon.</p>
        </div>
        <div className="benefit-item">
          <h3>Gain Confidence</h3>
          <p>Develop the confidence to safely and effectively join the more advanced classes.</p>
        </div>
      </section>
    </div>
  );
};

export default FundamentalsProgram;