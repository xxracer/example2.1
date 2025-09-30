import React from 'react';
import './CircularText.css';

const CircularText = () => {
  const text = "Jiu Jitsu - Kids Jiu Jitsu - Personal Training - Private Training - ";
  const characters = text.split('');

  return (
    <div className="circular-text-container">
      <div className="circular-text">
        {characters.map((char, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${i * (360 / characters.length)}deg) translate(120px) rotate(90deg)`
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