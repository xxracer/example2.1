import React from 'react';

const CompetitionTraining = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes the Competition Training program at Reign BJJ unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our program is led by World Champion Black Belt, Pablo Silva, providing direct access to elite-level coaching, strategy, and customized fitness and nutrition plans designed for competitive success."
        }
      },
      {
        "@type": "Question",
        "name": "Does the program include nutritional guidance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our customized training includes key nutrition strategies and advice from a dedicated coach to optimize weight cuts and maximize in-competition performance."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>High-Performance Competition Training for Jiu Jitsu in Katy: Led by a World Champion</h1>
      <p>
        Elevate your performance with our Competition Training program, giving you access to 100% customized fitness on a flexible schedule. You benefit from the direct coaching and high-level strategy of a World Champion Black Belt, Pablo Silva. Our program includes goal-oriented workouts, key nutrition strategies, and expert advice to ensure you are physically and mentally ready to compete at local events.
      </p>
    </div>
  );
};

export default CompetitionTraining;