import React from 'react'
import Navbar from '../components/Navbar';
import CardPro from '../components/CardPro';
import Footer from '../components/Footer';
import Img2 from '../components/Img2';
import About_cont from '../components/About_cont';

const About = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="ABOUT." text="I'M A FRIENDLY DEVELOPER" />
      <About_cont />
      <CardPro/>
      <Footer />
    </div>
  )
}

export default About