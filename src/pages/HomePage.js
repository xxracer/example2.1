import React from 'react';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import Programs from '../components/Programs';
import WhyChooseUs from '../components/WhyChooseUs';
import Facility from '../components/Facility';
import CallToAction from '../components/CallToAction';
import InstagramFeed from '../components/InstagramFeed';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <Programs />
      <WhyChooseUs />
      <Facility />
      <CallToAction />
      <InstagramFeed />
      <Testimonials />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;