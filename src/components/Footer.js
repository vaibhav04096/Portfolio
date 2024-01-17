import"./Footer_style.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color : "white", marginRight : "2rem"}}/>
                    <div>
                        <p>Sector 12, VikasNagar.</p>
                        <p>INDIA.</p>
                    </div>

                </div>
                <div className="phone">
                  <h4 >
                   <FaPhone size={20} style={{color : "white", marginRight : "2rem"}}/>
                  +918303163980
                   </h4>
                </div>
                <div className="mail">
                  <h4 >
                   <FaMailBulk size={20} style={{color : "white", marginRight : "2rem"}}/>
                  vsrivastava04096@gmail.com
                   </h4>
                </div>
            </div>
            <div className="right">
                <h4>About</h4>
                <p>A highly skilled software engineer 
                  with a strong background in computer 
                  science, specializing in the 
                  development of cutting-edge software 
                  solutions. </p>
                  <div className="social">
                   
                  <FaFacebook size={20} style={{color : "white", marginRight : "2rem"}}/>
                  <FaTwitter size={20} style={{color : "white", marginRight : "2rem"}}/>
                  <FaLinkedin size={20} style={{color : "white", marginRight : "2rem"}}/>
                  
                  </div>
            </div>
        </div>
    </div>
  )
}

export default footer