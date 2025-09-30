import React from 'react';

const PrivateLessons = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do Private Lessons cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Private lessons are priced at $170 per session, offering an investment in accelerated, personalized learning with a world-class instructor."
        }
      },
      {
        "@type": "Question",
        "name": "Are Private Lessons suitable for complete beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Beginners often find that private lessons help them build a solid foundation and confidence faster, making their subsequent transition into group classes more effective and enjoyable."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>Private Jiu Jitsu Lessons in Katy: Accelerated Learning with World-Class Instruction</h1>
      <p>
        Private lessons give you the opportunity to work with the Coach on a one-on-one or in a small group environment. Our one-on-one approach gets you results quicker than group classes, whether you’re perfecting techniques, improving fitness, or mastering new moves. Private training is great for all ages; kids build confidence quickly, and adults gain a solid foundation, making group classes more effective. At just $170 per session, you’re investing in exceptional quality and accelerated growth.
      </p>
    </div>
  );
};

export default PrivateLessons;