import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CredibilityLogos from './components/CredibilityLogos';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <CredibilityLogos />
        <FeaturesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;