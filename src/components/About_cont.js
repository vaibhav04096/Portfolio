import { Link } from "react-router-dom";
import "./About_contStyle.css"
import About2 from "../assets/about2.jpg";
import About1 from "../assets/about1.jpg";
import React from 'react'

const About_cont = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>WHO AM I</h1>
            <p>Hello, I'm A Dynamic Computer Science 
                Engineering graduate from Chandigarh University.
                 Proficient in C++, Java, Python, SQL, HTML, CSS, Haskell,
                  and JavaScript.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="top">
                    <img src={About2} className="img" alt="true"/>
                </div>
                <div className="bottom">
                    <img src={About1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About_cont