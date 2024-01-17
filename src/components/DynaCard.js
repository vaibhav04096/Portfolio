import "./Dyna_style.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const DynaCard = (props) => {
  return (
    <div className="project-card">
                
    <img src={props.imgsrc} alt="image" />
        <h2 className="project-title"> {props.title}</h2>
        <div className="pro-details">
            <p>{props.text }</p>
            <div className="pro-btn">
                <NavLink to={props.view}
                className="btn">view</NavLink>
                <NavLink to={props.view}
                className="btn">source</NavLink>
                </div>
        </div>
    </div>
  )
}

export default DynaCard