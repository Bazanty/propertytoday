import React from 'react';
import Heros from '@/components/Heros';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import Properties from '@/components/Properties';
import WhatWeDo from '@/components/Whatwedo';
import MakeDream from '@/components/MakeDream';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import About from './About/About';
import Contact from './ContactSection/contactUs';
import Property from './Properties/Property';


export default function Page() {
  return (
    <div>
      <Navbar />
      
      <Heros />
      <Features />
      <Home />
      
      <WhatWeDo /> 
      <Properties />
      <MakeDream />
      <About />
      <Property />
      
      
      <Contact />

      <Footer />
      

 </div>
  )
}
