import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Layout.css'
const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      
      <main className="main">
        <div className="layout__container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
