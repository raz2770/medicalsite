import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Facilities from '../facilities'
import HeroSection from '../HeroSection';
import Footer from '../Footer';



function Address() {
  return (
    <>
      <HeroSection />
      <Cards />
    
      <Facilities/>
     
      <Footer />
      
    </>
  );
}

export default Address;