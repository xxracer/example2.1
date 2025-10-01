import React from 'react';
import './CircularText.css';

const CircularText = () => {
  const text = "Jiu Jitsu - Kids Jiu Jitsu - Personal Training - Private Training -";
  const uniqueId = "text-path-" + Math.random().toString(36).substr(2, 9);

  return (
    <div className="circular-text-container">
      <svg viewBox="0 0 100 100" className="circular-text-svg">
        <defs>
          {/* Define the circular path */}
          <path id={uniqueId} d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="circular-svg-text">
          <textPath href={`#${uniqueId}`}>
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;