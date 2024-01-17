import { Link } from "react-router-dom"
import "./CardPro_style.css"
import React from 'react'

const CardPro = () => {
  return (
    <div className="Priceing">
        <div className="card-container">

            <div className="card">
                <h3>- Resume -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- Crafting Careers. -</p>
                <p>- Navigating Career. -</p>
                <p>- Explore My Professional Journey! -</p>
                <Link className="btn" 
                to={"https://drive.google.com/file/d/17ezYqrm7ABkeTmhekK0jo3j4jt2f1NiO/view?usp=sharing"}>
                     MAKE A CONNECTION</Link>
            </div>
            <div className="card">
                <h3>- Linkedin -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- Building Bridges. </p>
                <p>Connecting Minds. -</p>
                <p>-  Let's Forge Professional Alliances. -</p>
                <Link className="btn" 
                to={"https://www.linkedin.com/in/vaibhav-srivastava-3b95b018a/"}>
                     Let’s Connect!</Link>
            </div>
            <div className="card">
                <h3>- GitHub -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- Exploring Innovation in Code. -</p>
                <p>-  Your feedback would </p>
                <p>be greatly appreciated! -</p>
                <Link className="btn" 
                to={"https://www.linkedin.com/in/vaibhav-srivastava-3b95b018a/"}> Take a Peek at My GitHub!</Link>
            </div>
        </div>
    </div>
  )
}

export default CardPro