import React from 'react';
import FAQ from '../components/FAQ'; // Import the FAQ component

// Import components
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import Programs from '../components/Programs';
import Facility from '../components/Facility';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import ContactUs from '../components/ContactUs';
import InstagramFeed from '../components/InstagramFeed';

const HomePage = () => {
  const programsFaqs = [
    {
      question: "How does the training help members prepare for competition?",
      answer: "We offer a dedicated Competition Training program with customized fitness, key nutrition strategies, and coaching from a World Champion Black Belt."
    },
    {
      question: "Do you offer a trial for prospective students?",
      answer: "Yes, prospective students are encouraged to book a trial class to experience the training and community firsthand before committing to a membership."
    }
  ];

  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <Programs />
      <div style={{ maxWidth: '900px', margin: '0 auto 60px auto' }}>
        <FAQ faqData={programsFaqs} title="About Our Programs" />
      </div>
      <Facility />
      <Testimonials />
      <CallToAction />
      <ContactUs />
      <InstagramFeed />
    </div>
  );
};

export default HomePage;