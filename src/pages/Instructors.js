import React from 'react';
import FAQ from '../components/FAQ';

const Instructors = () => {
  const pageFaqs = [
    {
      question: "What are the primary competition achievements of Head Instructor Pablo Silva?",
      answer: "Pablo Silva is a highly decorated competitor, with major titles including a 1st Place victory at the IBJJF World Championship (2010), and multiple IBJJF World Masters and Pan American championships."
    },
    {
      question: "What belt rank does the Head Instructor hold?",
      answer: "Pablo Silva is a highly accomplished Black Belt, ensuring that students receive instruction at the highest level of technical knowledge and competitive experience."
    },
    {
      question: "What is Pablo Silva's team affiliation?",
      answer: "He is currently affiliated with the ZR Team, having previously represented Gracie Barra – Belo Horizonte."
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
    <div style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1 style={{ marginBottom: '20px' }}>Meet Our World-Class Instructors</h1>
      <p style={{ marginBottom: '40px', fontSize: '18px', lineHeight: '1.7' }}>
        Reign Jiu Jitsu is led by world-class instructors including Professor Pablo Silva, an internationally recognized competitor and coach. Students benefit from training under an experienced Jiu Jitsu professor, with guidance that blends tradition and modern techniques.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
        <img
          src="https://placehold.co/440x300?text=Portrait+of+Pablo+Silva"
          alt="Portrait of Pablo Silva"
          style={{ width: '100%', maxWidth: '440px', height: 'auto', borderRadius: '8px' }}
        />
        <img
          src="https://placehold.co/440x300?text=Group+of+Instructors"
          alt="Group of instructors"
          style={{ width: '100%', maxWidth: '440px', height: 'auto', borderRadius: '8px' }}
        />
      </div>
      <FAQ faqData={pageFaqs} title="Instructor FAQs" />
    </div>
  );
};

export default Instructors;