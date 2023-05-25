import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import "../../index.css";
import imgtop from "../../assets/react1.jpg"
import imgbottom from "../../assets/react2.webp"
const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who I am?</h1>
      <p>I'm frontend developer, create creative and responsive website for my clients. I am always enthusiastic about new work</p>

      <Link to="/contact" ><button className="btn">Contact</button></Link>
    </div>

    {/* <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={imgtop} alt="img" className="img"/>
        </div>

        <div className="img-stack bottom">
          <img src={imgbottom} alt="img" className="img"/>
        </div>
      </div>
    </div> */}
  </div>;
};

export default AboutContent;
