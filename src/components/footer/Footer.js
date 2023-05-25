import "./FooterStyles.css";
import React from "react";
import {FaHome, FaPhone, FaMailBulk,FaGithub, FaTelegram, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";
const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      
        <div className="left">
              <div className="location">
                  <FaHome style={{color:"#fff" , marginRight:"2rem"}} size={20}/>
                  <div><p>Street Bandery 10</p> <p>Ukraine</p></div>
              </div>
              <div className="number">
                  <h4><FaPhone style={{color:"#fff" , marginRight:"2rem"}} size={20}/>
                  +380 93 024 8947</h4>
              </div>

              <div className="email">
                  <h4><FaMailBulk style={{color:"#fff" , marginRight:"2rem"}} size={20}/>
                  twkesqolek@gmail.com</h4>
              </div>         
        </div>

        <div className="right">
              <div className="social">
                    <span>Social</span>

                    <Link to="https://www.instagram.com/webcraft_inst/"><FaInstagram style={{color:"#fff" , marginRight:"1rem"}} size={20} className="social-link"/></Link>
                    <Link to="https://t.me/twkesqQ"><FaTelegram style={{color:"#fff" , marginRight:"1rem"}} size={20} className="social-link"/></Link>
                    <Link to="https://github.com/Twkesq"><FaGithub style={{color:"#fff" , marginRight:"1rem"}} size={20} className="social-link"/></Link>
              </div>
        </div>

    </div>
  </div>;
};

export default Footer;
