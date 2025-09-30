import React from 'react';

const AboutPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Reign BJJ's commitment to the Katy community?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reign Jiu Jitsu is 100% committed to our community, offering the highest quality training in Katy to help individuals achieve their fitness and self-defense goals in a supportive environment."
        }
      },
      {
        "@type": "Question",
        "name": "How is the 'World Champion Method' defined?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The method is defined by instruction rooted in the verifiable competitive success of our Head Instructor, Pablo Silva (IBJJF World Champion), ensuring elite, results-driven technique is taught at every level."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>Reign BJJ: Our Mission, Our World Champion Method</h1>
      <p>
        Reign Jiu Jitsu is 100% committed to our community. Our method goes beyond typical martial arts training, combining combat sport, self-defense, and an effective fitness program to deliver holistic results. We are the first academy in Southwest Texas to offer this unique brand of Jiu Jitsu, providing the highest quality training in Katy. Whether you are focused on sustainable weight loss, self-defense skills, or mastering the art of Jiu Jitsu, our compassionate, world-class instructors will guide you to success.
      </p>
    </div>
  );
};

export default AboutPage;