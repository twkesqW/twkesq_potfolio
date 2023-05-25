import "./WorkCardStyles.css";

import { NavLink } from "react-router-dom";
import "../../index.css"
const WorkCard = ({title,imgsrc,details,view}) => {
  return <div className="project-card">
      <img src={imgsrc} alt="img"/>
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
          <p>{details}</p>
          <div className="project-btns">
            <NavLink to={view} className="btn">View</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>

          </div>
        </div>

  </div>;
};

export default WorkCard;
