import React from 'react';

const Schedule = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are there classes available for different times of the day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible training times with morning, noon, and evening classes to accommodate various schedules, including those of busy professionals and parents."
        }
      },
      {
        "@type": "Question",
        "name": "Is the schedule consistent on weekends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our weekend schedule typically includes morning classes and open mat sessions. Please check the current schedule page for specific Saturday and Sunday times."
        }
      }
    ]
  };
  return (
    <div style={{ paddingTop: '80px' }}>
        <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
        </script>
        <h1 style={{ textAlign: 'center' }}>View the Daily Jiu Jitsu Class Schedule for Reign BJJ Katy</h1>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            Access our comprehensive daily schedule covering all programs, including Kids Jiu Jitsu, Adult Fundamentals, Competition Training, and Open Mat sessions. We offer flexible training times, including morning BJJ classes, noon sessions for those on break, and evening classes to accommodate busy professionals. Select your class time and book your first trial session today.
        </p>
    </div>
  );
};

export default Schedule;