import WorkCard from "./WorkCard";
import "./WorkCardStyles.css";
import WorkCardData from "./WorkCardData.js";
import React from "react";

const Work = () => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      {WorkCardData.map((val, ind)=>{
        return(
            <WorkCard 
            
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            details={val.details}

            />
        );
      } )}
    </div>


  </div>;
};

export default Work;
