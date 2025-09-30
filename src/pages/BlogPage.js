import React from 'react';

const BlogPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What kind of topics does the Reign BJJ blog cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our blog covers a wide range of topics, including expert technique breakdowns, self-defense strategies, fitness and weight loss tips, community news, and coverage of local tournaments."
        }
      }
    ]
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <h1>Jiu Jitsu Insights and Training Articles: The Reign BJJ Blog</h1>
      <p>
        Dive into our blog for expert Jiu Jitsu insights, technique breakdowns, fitness tips, and community news. We cover topics ranging from self-defense strategies and weight loss optimization to interviews with competitors and coverage of local tournaments. Our goal is to provide valuable, free educational content to support both current students and those new to the world of martial arts.
      </p>
    </div>
  );
};

export default BlogPage;