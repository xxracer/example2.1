import React from 'react';
import './Programs.css';

const programsData = [
  {
    title: 'Kids Program',
    description: 'Confidence, discipline, and fun for children.',
    image: 'https://placehold.co/280x180?text=Kids+Class',
    alt: 'Kids class in session'
  },
  {
    title: 'Homeschool Jiu Jitsu',
    description: 'Daytime classes for homeschool families.',
    image: 'https://placehold.co/280x180?text=Homeschool+BJJ',
    alt: 'Homeschool Jiu Jitsu class'
  },
  {
    title: 'Adult Jiu Jitsu',
    description: 'For self-defense, fitness, and growth.',
    image: 'https://placehold.co/280x180?text=Adults+Rolling',
    alt: 'Adults rolling on mats'
  },
  {
    title: 'Fundamentals Program',
    description: 'Perfect for new students.',
    image: 'https://placehold.co/280x180?text=Fundamentals',
    alt: 'Fundamentals class'
  },
  {
    title: 'Competition Training',
    description: 'For athletes who want to test themselves on the mat.',
    image: 'https://placehold.co/280x180?text=Competition+Highlight',
    alt: 'Competition highlight photo'
  },
  {
    title: 'Private Lessons',
    description: 'One-on-one coaching for faster progress.',
    image: 'https://placehold.co/280x180?text=Private+Lesson',
    alt: 'Private BJJ lesson'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="programs-section">
      <h2 className="section-title">Our Programs</h2>
      <div className="programs-grid">
        {programsData.map((program, index) => (
          <div key={index} className="program-card">
            <div className="program-image-wrapper">
              <img src={program.image} alt={program.alt} />
            </div>
            <div className="program-content">
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;