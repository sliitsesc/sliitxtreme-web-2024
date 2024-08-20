// AllComponents.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import About from './About/About';
import CTA from './CTA/CTA';
import Pricing from './Pricing/Pricing';
import Testimonial from './Testimonial/Testimonial';
import FAQ from './FAQ/FAQ';
import Team from './Team/Team';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Brands from './Brands/Brands';
import Footer from './Footer/Footer';


const AllComponents = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Pricing />
      <Testimonial />
      <FAQ />
      <Team />
      <Blog />
      <Contact />
      <Brands />
      <Footer />
    </div>
  );
};

export default AllComponents;
