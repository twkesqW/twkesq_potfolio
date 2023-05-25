import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroimg2/HeroImg2";
import AboutContent from "../components/aboutcontent/AboutContent";
import Typed from "react-typed";
const About = () => {
  return <div>
    
    <Navbar/>
    <HeroImg2 title={"About"}  subtitle={
      <div className='row-flex'>
        <p>I'm </p>
        <Typed
            strings={['friendly', 'polite', 'intelligent' ,'talkative']}
            typeSpeed={120}
            backSpeed={140}
            loop
        />
        <p>Freelancer</p>
      </div>
    }/>
    <AboutContent/>
    <Footer/>
  </div>;
};

export default About;
