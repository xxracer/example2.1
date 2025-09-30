import React from 'react';

const HomeschoolProgram = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the qualifications of the instructor for the Homeschool program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The program is led by a black belt instructor who also has a background as a Physical Education and Health teacher, providing a unique and qualified perspective for homeschool students."
        }
      },
      {
        "@type": "Question",
        "name": "Can these classes count toward my child’s P.E. requirement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the program emphasizes physical fitness, helping children build strength, flexibility, and overall health, fulfilling the physical activity goals often associated with P.E."
        }
      },
      {
        "@type": "Question",
        "name": "Are the Homeschool classes different from the standard Kids Program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the core art is the same, Homeschool classes are scheduled during daytime hours to align with homeschool schedules and focus on screen-free, dedicated physical instruction."
        }
      },
      {
        "@type": "Question",
        "name": "What unique benefits does the program offer for homeschool children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It provides valuable social development and connection with peers, alongside specialized instruction in confidence, discipline, and physical fitness."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>Katy Homeschool Martial Arts: Expert Jiu Jitsu Instruction for Physical Education</h1>
      <p>
        Reign Jiu Jitsu’s Homeschool Martial Arts Program in Katy offers expert Brazilian Jiu Jitsu instruction for children ages 6 and up. Your child will receive expert training from a black belt instructor with a background as a Physical Education and Health teacher. This unique program fulfills P.E. requirements through engaging, screen-free classes that build strength, confidence, and discipline, ensuring physical and mental growth.
      </p>
    </div>
  );
};

export default HomeschoolProgram;