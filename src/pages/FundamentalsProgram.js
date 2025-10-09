import React from 'react';
import './ProgramPage.css';
import FAQ from '../components/FAQ';

const FundamentalsProgram = () => {
  const pageFaqs = [
    {
      question: "Who is the Fundamentals Program for?",
      answer: "It's designed for new students who are just beginning their Jiu Jitsu journey. It's the perfect entry point before joining the main adult classes."
    },
    {
      question: "What will I learn in this program?",
      answer: "You will learn the core movements, body positioning, and essential self-defense techniques that form the bedrock of the art, all in a safe and supportive environment."
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
    <div className="program-page">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <section className="program-hero" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Fundamentals+Class')" }}>
        <h1 className="program-hero-title">Fundamentals Program</h1>
      </section>

      <section className="program-intro">
        <p>
          Start your journey with our Fundamentals Jiu Jitsu classes. This program covers basic movements, positions, and techniques, ensuring that new students build a strong foundation. Perfect for those looking for beginner Jiu Jitsu near me.
        </p>
      </section>

      <section className="program-details-section">
        <div className="program-details-text">
          <h2>Build a Strong Foundation</h2>
          <p>
            Our fundamentals program is designed to give you the confidence and skills you need to succeed in your Jiu Jitsu journey.
          </p>
          <ul>
            <li>- Learn basic movements and positions</li>
            <li>- Understand core techniques</li>
            <li>- Build a solid foundation for advanced classes</li>
            <li>- Perfect for beginners</li>
          </ul>
        </div>
        <div className="program-details-image">
          <img src="https://placehold.co/600x400?text=Instructor+Demonstrating" alt="Instructor demonstrating a basic move" />
        </div>
      </section>

      <div style={{'textAlign':'center', 'marginBottom': '60px'}}>
        <img src="https://placehold.co/600x400?text=New+Students+Practicing" alt="New students practicing" />
      </div>

      <FAQ faqData={pageFaqs} title="Fundamentals Program FAQs" />
    </div>
  );
};

export default FundamentalsProgram;