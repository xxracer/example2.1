import React from 'react';
import './ProgramPage.css'; // Changed to the generic stylesheet

const KidsProgram = () => {
  return (
    <div className="program-page"> {/* Changed class name */}
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Kids+Training')" }}>
        <h1 className="program-hero-title">Kids Program</h1> {/* Changed class name */}
      </section>

      <section className="program-intro"> {/* Changed class name */}
        <p>
          The Reign BJJ Kids Program is designed to provide benefits that extend far beyond the mats. We instill important core values like confidence, self-discipline, and respect through the martial art of Jiu Jitsu, helping to shape and positively impact the next generation.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Ages 6-13: Building Champions</h2>
          <p>
            This program builds on the fundamentals and begins to incorporate a more diverse set of Jiu Jitsu techniques and skills.
          </p>
          <ul>
            <li>- Instill self-discipline and personal responsibility</li>
            <li>- Develop physical awareness and coordination</li>
            <li>- Build strength, speed, and balance</li>
            <li>- Increase situational and positional sparring</li>
            <li>- Use goal setting for self-improvement</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=Focused+Student" alt="A young student practicing Jiu Jitsu" />
        </div>
      </section>

      <section className="benefits-grid">
        <div className="benefit-item">
          <h3>Confidence</h3>
          <p>Students learn to be comfortable in uncomfortable situations, boosting their self-esteem.</p>
        </div>
        <div className="benefit-item">
          <h3>Discipline</h3>
          <p>The structured nature of Jiu Jitsu teaches focus, respect, and the importance of practice.</p>
        </div>
        <div className="benefit-item">
          <h3>Fitness</h3>
          <p>A fun and engaging way for kids to stay active, improving their coordination and overall health.</p>
        </div>
        <div className="benefit-item">
          <h3>Problem Solving</h3>
          <p>Jiu Jitsu is often called "human chess," teaching kids to think critically under pressure.</p>
        </div>
      </section>
    </div>
  );
};

export default KidsProgram;