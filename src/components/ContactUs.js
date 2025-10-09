import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us-section">
      <div className="contact-us-container">
        <div className="contact-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13853.902979300916!2d-95.7506772!3d29.7638822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8641279da5c05bd1%3A0x3fa330f3485a23b4!2sReign%20Jiu%20Jitsu!5e0!3m2!1ses!2sve!4v1759257523007!5m2!1ses!2sve"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Reign Jiu Jitsu Location"
          ></iframe>
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