import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us-section">
      <div className="contact-us-container">
        <div className="contact-map-container">
          <img src="https://placehold.co/400x350?text=Google+Business+Map" alt="Map to Reign BJJ" className="contact-map-placeholder" />
        </div>
        <div className="contact-form-container">
          <h2 className="section-title">Contact Us</h2>
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;