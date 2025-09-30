import React from 'react';
import './Programs.css';

const programsData = [
  {
    title: 'Kids Program',
    description: 'Confidence and discipline training for children ages 4-13 in a positive and safe environment.',
    image: 'https://placehold.co/280x180?text=Kids+Program'
  },
  {
    title: 'Adult Program',
    description: 'Comprehensive self-defense and fitness classes tailored for all skill levels.',
    image: 'https://placehold.co/280x180?text=Adult+Program'
  },
  {
    title: 'Competition Training',
    description: 'Advanced techniques, sparring, and coaching for competitive athletes.',
    image: 'https://placehold.co/280x180?text=Competition+Training'
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
              <img src={program.image} alt={program.title} />
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