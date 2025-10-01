import React from 'react';
import './CircularText.css';

const CircularText = () => {
  // The text to be displayed in a circle. The trailing space and hyphen are important for spacing.
  const text = "Jiu Jitsu - Kids Jiu Jitsu - Personal Training - Private Training - ";
  const characters = text.split('');
  const radius = 100; // The radius of the circle
  const characterAngle = 360 / characters.length;

  return (
    <div className="circular-text-wrapper">
      <div className="circular-text-container">
        <p className="circular-text">
          {characters.map((char, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${i * characterAngle}deg) translate(${radius}px) rotate(90deg)`
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CircularText;