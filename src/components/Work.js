import React from 'react'
import "./Dyna_style.css";
import DynaCard from "./DynaCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="pro-heading">PROJECT</h1>
        
        <div className="project-container">
          
             {WorkCardData.map((val, ind)=>{
                return(
                    <DynaCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
             })}
        </div>
    </div>
  )
}

export default Work