import React from 'react';

const AdultProgram = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is BJJ a good workout for weight loss and muscle gain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BJJ is an effective fitness program that promotes sustainable weight loss and lean muscle gain while offering superior mental benefits like stress reduction and improved sleep."
        }
      },
      {
        "@type": "Question",
        "name": "Are there morning, noon, or evening classes available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We schedule classes to fit various adult routines, including morning BJJ classes, noon classes for lunch breaks, and evening classes after work, offering great flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need any previous martial arts experience to join the Adult Program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The program is structured to welcome complete beginners, guiding you safely through the fundamentals and ensuring you gain confidence before advancing."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>Adult Jiu Jitsu Classes in Katy: Fitness, Self-Defense, and Stress Reduction</h1>
      <p>
        Brazilian Jiu Jitsu is more than a martial art—it's a combat sport, a self-defense system, and an effective fitness program. Join us at Reign Jiu Jitsu in Katy for: sustainable weight loss & lean muscle gain; improved confidence & boosted energy; and reduced stress for better sleep. Whether you're a complete beginner or an experienced practitioner coming from Lumberton or Nederland, our compassionate instructors will guide you to success.
      </p>
    </div>
  );
};

export default AdultProgram;