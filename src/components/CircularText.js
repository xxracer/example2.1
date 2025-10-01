import React from 'react';
import './CircularText.css';

const CircularText = () => {
  const text = "Jiu Jitsu - Kids Jiu Jitsu - Personal Training - Private Training - ";
  const characters = text.split('');
  const angle = 360 / characters.length;

  return (
    <div className="circular-text-container">
      <div className="circular-text">
        {characters.map((char, index) => (
          <span
            key={index}
            style={{
              transform: `rotate(${index * angle}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircularText;