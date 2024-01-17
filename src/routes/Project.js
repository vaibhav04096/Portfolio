import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Work from '../components/Work.js';
import Img2 from '../components/Img2';
import CardPro from '../components/CardPro';




const Project = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading ="PROJECTS." text="SOME OF MY MOST RECENT WORKS" />
      <Work />
      <CardPro />
      <Footer />


    </div>
  )
}

export default Project