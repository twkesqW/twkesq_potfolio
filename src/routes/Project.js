import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroimg2/HeroImg2";
import PricingCard from "../components/projects/PricingCard";
import Work from "../components/projects/Work";

const Project = () => {
  return <div>
    <Navbar/>
    <HeroImg2 title={"Projects"}  subtitle={"Some of my works"}/>
    <PricingCard/>
    <Work/>
    <Footer/>
    </div>;
};

export default Project;
