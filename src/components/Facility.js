import React from 'react';
import './Facility.css';

const facilityImages = [
  { src: 'https://placehold.co/320x220?text=Facility+1', alt: 'Spacious training mats' },
  { src: 'https://placehold.co/320x220?text=Facility+2', alt: 'State-of-the-art equipment' },
  { src: 'https://placehold.co/320x220?text=Facility+3', alt: 'Clean and modern environment' }
];

const Facility = () => {
  return (
    <section id="facility" className="facility-section">
      <h2 className="section-title">Our Facility</h2>
      <p className="facility-description">
        Experience training in a spacious, modern facility equipped with top-grade mats and
        state-of-the-art conditioning equipment to support your progress.
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