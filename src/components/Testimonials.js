import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="reviews" className="testimonials-section">
      <h2 className="section-title">Reviews</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <p className="testimonial-quote" style={{fontStyle: 'normal', textAlign: 'center'}}>
              “Parents and students agree – Reign Jiu Jitsu is the best Jiu Jitsu in Houston. From kids’ martial arts to adult training, our members love the family-friendly atmosphere, professional instruction, and results-driven programs. Whether you’re looking for kids Jiu Jitsu near me or private Jiu Jitsu classes near me, our academy is trusted by the community.”
            </p>
          </div>
          <img
            src="https://placehold.co/600x400?text=Smiling+Family"
            alt="Smiling family after class"
            className="testimonial-main-image" // A new class for styling
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;