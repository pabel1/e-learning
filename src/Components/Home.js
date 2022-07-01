import React from 'react'
import About from "../Components/AboutUs/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";

// import Header from "./Components/Header/Header";
import Works from "../Components/HowItWorks/Works";
import Services from "../Components/Services/Services";



const Home = () => {
  return (
    <>
        
        <Banner />
        <Works />
        <About />
        <Services />
        <Contact />
        
       
        

    </>
  )
}

export default Home