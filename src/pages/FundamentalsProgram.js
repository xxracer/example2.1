import React from 'react';

const FundamentalsProgram = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between Gi and No-Gi training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gi training is done wearing the traditional Jiu Jitsu uniform (the Gi), which can be used for various grips and chokes. No-Gi training is done in athletic wear and focuses more on body mechanics and speed. Our Fundamentals Program introduces you to both styles."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be in shape to start the Fundamentals Program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. The program is designed to help you build fitness at your own pace as you learn. It's a great way to get in shape while learning a new skill."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>Beginner Jiu Jitsu Fundamentals Program: Start Your Journey in Katy, TX</h1>
      <p>
        Our Fundamentals Program is the perfect entry point for new students. We focus on the core movements, body positioning, and essential self-defense techniques that form the bedrock of the art. This dedicated class environment ensures you learn safely and effectively, gaining the confidence needed to transition smoothly into the main Adult Program. You will be introduced to both Gi (uniform) and No-Gi training styles.
      </p>
    </div>
  );
};

export default FundamentalsProgram;