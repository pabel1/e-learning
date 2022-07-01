// import './App.css';
import About from "./Components/AboutUs/About";
// import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import Works from "./Components/HowItWorks/Works";
import Services from "./Components/Services/Services";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home";
import React from "react";
import Error404 from "./Components/Error/Error404";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
