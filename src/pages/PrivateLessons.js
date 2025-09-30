import React from 'react';
import './ProgramPage.css';

const PrivateLessons = () => {
  return (
    <div className="program-page">
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Private+Lessons')" }}>
        <h1 className="program-hero-title">Private Lessons</h1>
      </section>

      <section className="program-intro">
        <p>
          Private lessons give you the opportunity to work with the Coach on a one-on-one or in a small group environment, getting you results quicker than group classes.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Accelerated Learning</h2>
          <p>
            Our one-on-one approach is perfect for perfecting techniques, improving fitness, or mastering new moves. At just $170 per session, you’re investing in exceptional quality and accelerated growth.
          </p>
          <ul>
            <li>- Personalized, one-on-one instruction</li>
            <li>- Suitable for all ages and skill levels</li>
            <li>- Build a solid foundation faster</li>
            <li>- Great for kids to build confidence quickly</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=One-on-One" alt="Private Jiu Jitsu lesson" />
        </div>
      </section>

      <section className="benefits-grid">
        <div className="benefit-item">
          <h3>Personalized Feedback</h3>
          <p>Receive immediate, detailed feedback tailored specifically to your needs and goals.</p>
        </div>
        <div className="benefit-item">
          <h3>Faster Results</h3>
          <p>A focused environment means you can master techniques and concepts much more quickly.</p>
        </div>
        <div className="benefit-item">
          <h3>Flexible Scheduling</h3>
          <p>Work with our instructors to find a time for your private lesson that fits your schedule.</p>
        </div>
        <div className="benefit-item">
          <h3>For Everyone</h3>
          <p>Beginners can build a strong foundation, while advanced students can perfect their game.</p>
        </div>
      </section>
    </div>
  );
};

export default PrivateLessons;