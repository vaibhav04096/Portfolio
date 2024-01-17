import"./Img_style.css";

import React from 'react'
import IntroImg from "../assets/intro.JPG"
import {Link} from "react-router-dom";



const Img = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className=" intro-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
<div className="content">
    <p>Hi I'M A React Developer</p>
    <h1>React Developer</h1>
    <div >
        <Link to="/project" className="btn">PROJECTS</Link>
       
        <Link to="/Contact" className="btn-light">CONTACT</Link>
    </div>
</div>

    </div>
  )
}

export default Img