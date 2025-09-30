import React from 'react';

const AffiliateSchools = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the benefit of being part of the ZR Team affiliate network?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our affiliation with the global ZR Team, led by Master Ze Radiola, ensures our curriculum meets a world-class standard. It also provides our students with opportunities to attend seminars and train at affiliate schools worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "Does this affiliation cost extra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, access to the knowledge and standards set by the ZR Team is included as part of your membership at Reign BJJ."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>ZR Team Affiliate Network: Global Jiu Jitsu Training Access</h1>
      <p>
        Reign BJJ is proud to be part of the global ZR Team affiliate network, led by Master Ze Radiola. This affiliation ensures that our curriculum remains current and consistent with one of the most respected teams in the world. Our students benefit from this global connection, which often grants access to seminars, training camps, and the ability to train at affiliate schools around the world.
      </p>
    </div>
  );
};

export default AffiliateSchools;