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
      question: "Is Jiu Jitsu safe for children, and what are the benefits for kids?",
      answer: "Yes, our Kids Jiu Jitsu program is taught in a safe, controlled environment. Benefits include developing strong core values, leadership skills, physical fitness, and the self-confidence necessary to address anti-bullying situations. [2]"
    },
    {
      question: "I am an adult beginner with no experience. Where should I start?",
      answer: "New adult students should begin with our Fundamentals Program. This curriculum focuses on core movements, body positioning, and essential techniques, ensuring you learn safely and effectively before transitioning to the main Adult Program."
    },
    {
      question: "How quickly can I see results in fitness and weight loss with Jiu Jitsu?",
      answer: "Jiu Jitsu is a highly effective fitness program. Consistent training helps achieve sustainable weight loss, lean muscle gain, improved confidence, and boosted energy faster than traditional gym workouts. [2, 1]"
    },
    {
      question: "Does the training include self-defense techniques?",
      answer: "Yes. Brazilian Jiu Jitsu is fundamentally a self-defense system, providing practical techniques that are highly useful in real-life situations, allowing control over an opponent regardless of their size. [1, 3]"
    },
    {
      question: "Is a uniform (Gi) required for the first class?",
      answer: "For your first trial class, comfortable athletic wear is sufficient. We provide guidance on required gear after enrollment, and the Unlimited Membership often includes a complimentary Gi. [4]"
    },
    {
      question: "Who is the Head Instructor and what level of expertise does he provide?",
      answer: "The Head Instructor is Pablo Silva, a highly decorated Black Belt and former IBJJF World Champion. Training here means receiving instruction rooted in verifiable, world-class competitive success and expertise. "
    }
  ];

  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <Programs />
      <Facility />
      <Testimonials />
      <CallToAction />
      <ContactUs />
      <InstagramFeed />
      <div style={{ maxWidth: '900px', margin: '0 auto 60px auto' }}>
        <FAQ faqData={programsFaqs} title="About Our Programs" />
      </div>
    </div>
  );
};

export default HomePage;