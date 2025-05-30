// src/pages/CSR.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../contact/csr.css';
import logo from '../asset/Mn11.png'; 
import csrImage from '../asset/pex.jpg'; 
import justiceImage from '../asset/pax.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const CSR = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="csr-container">
      <header className="header">
        <div className="brand-block">
          <img src={logo} alt="Mantra Attorneys LP" className="brand-logo" />
          <p className="brand-name">
            MANTRA <br /> ATTORNEYS LP
          </p>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/about">About</a>
          <a href="/practice">Practice Areas</a>
          <a href="/partners">Partners</a>
          <a href="/insight">Insight</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/csr">CSR</a>
          <button className="signin-btn" onClick={() => navigate('/staff')}>
            Sign In
          </button>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      <section className="hero-section" style={{ backgroundImage: `url(${csrImage})` }}>
        <h3>Corporate Social <br></br>Responsibility</h3>
      </section>

      <section className="csr-content">
        <p>
          Our firm is committed to making strong engagement towards giving back to the society through pro bono legal advice,
          charitable deeds and educational initiatives and programs. We sometimes undertake pro bono works to help tackle
          global humanitarian issues. We remain resolute and determined in supporting access to justice and community initiatives
          for the homeless and other socially disadvantaged groups. <br></br> Be assured of our highest regards as we look forward to working with you
        </p>
        
        <img src={justiceImage} alt="Justice Scale" className="justice-image" />
      </section>

      <footer className="footers">
      <h2 className="footers-heading">Do You Need Legal Help?</h2>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Give Us A Call</h4>
          <p>+2348149977915</p>
          <p>+2348145137533</p>
        </div>
        <div className="footer-column">
          <h4>Email Us At</h4>
          <p>ogundele676@gmail.com</p>
          <p>mantraattorneys@gmail.com</p>
        </div>
        <div className="footer-column">
          <h4>Visit Us At</h4>
          <p>1st Chancery House, No. 5</p>
          <p>C1 S Lekkie Estate Drive,</p>
          <p>Lekki Phase 1, On the Core of Hill & Springkl Lagos.</p>
        </div>
      </div>

      <div className="footer-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Mantra Attorneys LP</p>
        <p>Privacy Policy & Terms of Use</p>
      </div>
    </footer>
    </div>
  );
};

export default CSR;
