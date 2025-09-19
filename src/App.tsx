import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import ServiceMap from './components/ServiceMap';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Stats />
        <ServiceMap />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;