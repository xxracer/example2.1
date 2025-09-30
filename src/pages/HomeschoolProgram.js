import React from 'react';
import './ProgramPage.css';

const HomeschoolProgram = () => {
  return (
    <div className="program-page">
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Homeschool+BJJ')" }}>
        <h1 className="program-hero-title">Homeschool Program</h1>
      </section>

      <section className="program-intro">
        <p>
          Reign Jiu Jitsu’s Homeschool Martial Arts Program in Katy offers expert instruction for children ages 6 and up, providing a unique and engaging way to fulfill P.E. requirements.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Led by a PE & Health Teacher</h2>
          <p>
            Your child will receive expert training from a black belt instructor who also has a background as a Physical Education and Health teacher. This unique program ensures physical and mental growth in a safe environment.
          </p>
          <ul>
            <li>- Fulfills P.E. requirements</li>
            <li>- Builds strength, confidence, and discipline</li>
            <li>- Engaging, screen-free classes</li>
            <li>- Promotes social development</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=Homeschool+Group" alt="Homeschool Jiu Jitsu class" />
        </div>
      </section>

      <section className="benefits-grid">
        <div className="benefit-item">
          <h3>Physical Fitness</h3>
          <p>A structured program that helps children build strength, flexibility, and overall health.</p>
        </div>
        <div className="benefit-item">
          <h3>Social Connection</h3>
          <p>Provides valuable social development and connection with peers in a supportive setting.</p>
        </div>
        <div className="benefit-item">
          <h3>Expert Instruction</h3>
          <p>Daytime classes that align with homeschool schedules and focus on dedicated physical instruction.</p>
        </div>
        <div className="benefit-item">
          <h3>Character Building</h3>
          <p>Specialized instruction in confidence, discipline, and physical fitness from a qualified instructor.</p>
        </div>
      </section>
    </div>
  );
};

export default HomeschoolProgram;