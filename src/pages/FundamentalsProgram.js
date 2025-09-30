import React from 'react';
import './ProgramPage.css';

const FundamentalsProgram = () => {
  return (
    <div className="program-page">
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Fundamentals+Class')" }}>
        <h1 className="program-hero-title">Fundamentals Program</h1>
      </section>

      <section className="program-intro">
        <p>
          Start your journey with our Fundamentals Jiu Jitsu classes. This program covers basic movements, positions, and techniques, ensuring that new students build a strong foundation. Perfect for those looking for beginner Jiu Jitsu near me.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Build a Strong Foundation</h2>
          <p>
            Our fundamentals program is designed to give you the confidence and skills you need to succeed in your Jiu Jitsu journey.
          </p>
          <ul>
            <li>- Learn basic movements and positions</li>
            <li>- Understand core techniques</li>
            <li>- Build a solid foundation for advanced classes</li>
            <li>- Perfect for beginners</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=Instructor+Demonstrating" alt="Instructor demonstrating a basic move" />
        </div>
      </section>

      <div style={{'textAlign':'center', 'marginBottom': '60px'}}>
        <img src="https://placehold.co/600x400?text=New+Students+Practicing" alt="New students practicing" />
      </div>
    </div>
  );
};

export default FundamentalsProgram;