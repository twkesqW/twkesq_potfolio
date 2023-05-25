import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroimg2/HeroImg2";
import Form from "../components/form/Form.js";
const Contact = () => {
  return <div>

    <Navbar/>
    <HeroImg2 title={"Contact"}  subtitle={"Lets have a chat"}/>
    <Form/>
    <Footer/>
  </div>;
};

export default Contact;
