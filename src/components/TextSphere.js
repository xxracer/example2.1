import React, { useEffect, useState } from 'react';
import './TextSphere.css';

const TextSphere = () => {
  const texts = [
    'Jiu Jitsu', 'Kids Jiu Jitsu', 'Personal Training', 'Private Training',
    'Self-Defense', 'Fitness', 'Community', 'Discipline',
    'Confidence', 'Respect', 'Growth', 'BJJ Katy'
  ];

  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      const newRadius = window.innerWidth < 768 ? 100 : 150;
      setRadius(newRadius);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="text-sphere-container">
      <div className="text-sphere">
        {texts.map((text, i) => {
          const phi = Math.acos(-1 + (2 * i) / texts.length);
          const theta = Math.sqrt(texts.length * Math.PI) * phi;

          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          return (
            <span
              key={i}
              className="tag"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`
              }}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TextSphere;