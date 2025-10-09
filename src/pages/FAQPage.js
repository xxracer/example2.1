import React from 'react';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  const pageFaqs = [
    {
      question: "What benefits are included with the Unlimited classes Membership?",
      answer: "The Unlimited Membership includes access to all Gi and No-Gi classes, a complimentary Gi, a complimentary Private Lesson, and access to invitation-only classes."
    },
    {
      question: "Are there contracts required for membership?",
      answer: "Our memberships offer flexible terms. Please speak with our staff during your trial class to discuss the best commitment level for your needs."
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
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h1>
      <FAQ faqData={pageFaqs} title="" />
    </div>
  );
};

export default FAQPage;