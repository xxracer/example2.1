import React from 'react';
import './ProgramPage.css';

const CompetitionTraining = () => {
  return (
    <div className="program-page">
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Competition+Training')" }}>
        <h1 className="program-hero-title">Competition Training</h1>
      </section>

      <section className="program-intro">
        <p>
          Elevate your performance with our Competition Training program, giving you access to 100% customized fitness on a flexible schedule and direct coaching from a World Champion.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Led by a World Champion</h2>
          <p>
            You benefit from the direct coaching and high-level strategy of a World Champion Black Belt, Pablo Silva. Our program includes goal-oriented workouts and key nutrition strategies to ensure you are ready to compete.
          </p>
          <ul>
            <li>- Direct access to elite-level coaching</li>
            <li>- Customized fitness and nutrition plans</li>
            <li>- High-level strategy and goal-oriented workouts</li>
            <li>- Prepare for local and major competitions</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=Competitor" alt="Jiu Jitsu competitor" />
        </div>
      </section>

      <section className="benefits-grid">
        <div className="benefit-item">
          <h3>Elite Coaching</h3>
          <p>Train directly under a World Champion Black Belt and gain a competitive edge.</p>
        </div>
        <div className="benefit-item">
          <h3>Customized Fitness</h3>
          <p>Receive a training and nutrition plan tailored to your specific competition goals.</p>
        </div>
        <div className="benefit-item">
          <h3>Advanced Strategy</h3>
          <p>Learn the high-level strategies needed to succeed at the highest levels of the sport.</p>
        </div>
        <div className="benefit-item">
          <h3>Peak Performance</h3>
          <p>We ensure you are physically and mentally ready to perform your best at any event.</p>
        </div>
      </section>
    </div>
  );
};

export default CompetitionTraining;