import React from "react";
// import {  Link } from 'react-router-dom';
import '../home/home.css'

import logo from "../asset/Mn11.png"; // Replace with your logo image
import statue from "../asset/M1.png"; // Replace with your Lady Justice image
// import About from "./about/about";



function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Mantra Attorneys LP" className="logo-img" />
          <h1 className="brand">MANTRA <br></br> ATTORNEYS LP</h1>
        </div>
        <nav className="nav">
        {/* <Link to="/About">About</Link> */}
          <a href="/About">About</a> 
          <a href="#practice">Practice Areas</a>
          <a href="#partners">Partners</a>
          <a href="#bookconsult">Free Consultation</a>
          <a href="#csr">Corporate Social Responsibility</a>
          <button className="contact-button">Sign In</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="welcome">Welcome to</p>
          <h2>MANTRA ATTORNEYS LP</h2>
          <h1 className="main-heading">
            We Delivered Efficient <br /> And Exceptional <br /> Legal Services
          </h1>
          <button className="hero-button">Contact Us</button>
        </div>

        <div className="hero-image">
          <img src={statue} alt="Lady Justice" className="statue-img" />
        </div>
      </section>
    </div>
  );
}

export default App;