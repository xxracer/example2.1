import React from 'react';
import './Facility.css';

const facilityImages = [
  { src: 'https://placehold.co/400x280?text=Facility+Interior', alt: 'Wide shot of facility interior' },
  { src: 'https://placehold.co/400x280?text=Locker+Rooms', alt: 'Clean locker rooms / training equipment' }
];

const Facility = () => {
  return (
    <section id="facility" className="facility-section">
      <h2 className="section-title">Our Facility</h2>
      <p className="facility-description">
        Our modern facility provides everything you need for safe and effective training. With competition-quality mats, spacious training areas, and a clean environment, we are more than a Jiu Jitsu studio near me – we are a sports performance gym in Katy, TX, designed to help you grow physically and mentally.
      </p>
      <div className="facility-image-grid">
        {facilityImages.map((image, index) => (
          <div key={index} className="facility-image-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facility;