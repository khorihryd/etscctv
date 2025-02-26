// src/pages/Home.jsx

import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Packages from '../components/Packages/Packages';
import WhyUs from '../components/WhyUs/WhyUs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero /> 
      <About />
      <Services />
      <Packages />
      <WhyUs />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default Home;
