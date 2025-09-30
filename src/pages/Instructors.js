import React from 'react';

const Instructors = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the primary competition achievements of Head Instructor Pablo Silva?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pablo Silva is a highly decorated competitor, with major titles including a 1st Place victory at the IBJJF World Championship (2010), and multiple IBJJF World Masters and Pan American championships."
        }
      },
      {
        "@type": "Question",
        "name": "What is Pablo Silva's team affiliation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "He is currently affiliated with the ZR Team, having previously represented Gracie Barra – Belo Horizonte."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>Meet World Champion Pablo Silva: Black Belt Jiu Jitsu Instruction in Katy, Texas</h1>
      <p>
        Reign BJJ is led by Pablo Silva, a highly decorated Brazilian Jiu Jitsu Black Belt under Marcelo Azevedo and a former Gracie Barra representative, now with ZR Team. Pablo Silva reached the top of the competitive world by winning the IBJJF World Championship in 2010 and holds numerous prestigious titles, including multiple IBJJF World Masters, Pan, and Houston Open titles. Training under Pablo means receiving instruction rooted in verifiable, world-class expertise and competitive success.
      </p>
    </div>
  );
};

export default Instructors;