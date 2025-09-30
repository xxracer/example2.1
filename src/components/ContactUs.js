import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us-section">
      <div className="contact-us-container">
        <div className="contact-map-container">
          <img src="https://placehold.co/400x350?text=Front+of+Academy" alt="Front view of academy building" className="contact-map-placeholder" />
        </div>
        <div className="contact-text-container">
          <h2 className="section-title">Contact Us</h2>
          <p>
            Looking for Jiu Jitsu near me open now? Come visit our academy in the heart of Katy, TX. Call or message us today to schedule your free trial class. We also offer self-defense classes in Katy TX for teens, women, and adults.
          </p>
          <button className="submit-button" onClick={() => window.location.href='/contact'}>
            Schedule Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;