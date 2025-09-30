import React, { useState, useEffect } from 'react';
import FAQ from '../components/FAQ';

const API_URL = process.env.REACT_APP_API_URL || '/api/instructors';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setInstructors(data))
      .catch(err => console.error("Error fetching instructors:", err));
  }, []);

  const pageFaqs = [
    {
      question: "What are the primary competition achievements of the instructors?",
      answer: "Our instructors are highly decorated competitors, with major titles including IBJJF World and Pan American championships."
    },
    {
      question: "What belt ranks do the instructors hold?",
      answer: "Our team is led by accomplished Black Belts, ensuring that students receive instruction at the highest level of technical knowledge and competitive experience."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '900px', margin: '0 auto' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Meet Our World-Class Instructors</h1>

      {instructors.map(instructor => (
        <div key={instructor.id} style={{ display: 'flex', gap: '30px', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap' }}>
          <img
            src={instructor.image}
            alt={instructor.name}
            style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px', flexShrink: 0 }}
          />
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ marginTop: 0 }}>{instructor.name}</h2>
            <p style={{ lineHeight: '1.7' }}>{instructor.bio}</p>
          </div>
        </div>
      ))}

      <FAQ faqData={pageFaqs} title="Instructor FAQs" />
    </div>
  );
};

export default Instructors;