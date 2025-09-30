import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Training at Reign Jiu Jitsu has built my confidence and skill like no other academy.",
    author: "— Jane D.",
    image: "https://placehold.co/60x60?text=JD"
  },
  {
    quote: "The best coaches and a fantastic community. My entire family trains here and we love it.",
    author: "— Mike S.",
    image: "https://placehold.co/60x60?text=MS"
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="testimonials-section">
      <h2 className="section-title">What Our Students Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={`Testimonial from ${testimonial.author}`} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;