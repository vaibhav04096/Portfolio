import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Img2 from '../components/Img2';
import Formcont from '../components/Formcont';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="CONTACT." text="LET'S HAVE A CHAT" />
      <Formcont/>
      <Footer />
    </div>
  )
}

export default Contact