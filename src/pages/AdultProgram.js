import React from 'react';
import './ProgramPage.css';

const AdultProgram = () => {
  return (
    <div className="program-page">
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Adults+Training')" }}>
        <h1 className="program-hero-title">Adult Program</h1>
      </section>

      <section className="program-intro">
        <p>
          Brazilian Jiu Jitsu is more than a martial art—it's a combat sport, a self-defense system, and an effective fitness program designed for adults of all skill levels.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Fitness, Self-Defense & Stress Reduction</h2>
          <p>
            Join us at Reign Jiu Jitsu in Katy for a program that delivers sustainable weight loss, lean muscle gain, improved confidence, and reduced stress.
          </p>
          <ul>
            <li>- Morning, noon, and evening classes available</li>
            <li>- No previous martial arts experience required</li>
            <li>- Welcoming environment for complete beginners</li>
            <li>- Compassionate, world-class instructors</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=Adult+Class" alt="Adults training Jiu Jitsu" />
        </div>
      </section>

      <section className="benefits-grid">
        <div className="benefit-item">
          <h3>Weight Loss</h3>
          <p>An effective fitness program that promotes sustainable weight loss and lean muscle gain.</p>
        </div>
        <div className="benefit-item">
          <h3>Confidence</h3>
          <p>Gain confidence and boost your energy levels both on and off the mats.</p>
        </div>
        <div className="benefit-item">
          <h3>Stress Relief</h3>
          <p>A healthy outlet for stress that contributes to better sleep and mental clarity.</p>
        </div>
        <div className="benefit-item">
          <h3>Flexibility</h3>
          <p>With classes throughout the day, you can find a time that fits your busy schedule.</p>
        </div>
      </section>
    </div>
  );
};

export default AdultProgram;