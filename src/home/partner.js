import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import prof from '../asset/prof.jpg';
import girl from '../asset/girl.jpg';
import logo from '../asset/Mn11.png';
import './partner.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Partners() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="brand-block">
          <img src={logo} alt="Mantra Attorneys LP" className="brand-logo" />
          <p className="brand-name">MANTRA <br /> ATTORNEYS LP</p>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/practice" onClick={closeMenu}>Practice Areas</a>
          <a href="/partners" className="active" onClick={closeMenu}>Partners</a>
          <a href="/insight" onClick={closeMenu}>Insight</a>
          <a href="/testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="/csr" onClick={closeMenu}>CSR</a>
          <button className="signin-btn" onClick={() => {
            closeMenu();
            window.location.href = '/staff';
          }}>Sign In</button>
        </nav>
      </header>

      <section className="partners-hero">
        <div className="overlay">
          <h1>Partners</h1>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container">
          <div className="partner-card">
            <img src={prof} alt="Gideon" className="partner-image" />
            <h3 className="partner-name">GIDEON O. BALOGUN, LLB. (Hons) LLM</h3>
            <Link to="/profile1" className="view-profile-button">View Profile</Link>
          </div>

          <div className="partner-card">
            <img src={prof} alt="Samson" className="partner-image" />
            <h3 className="partner-name">SAMSON A. OGUNDELE, LLB. (Hons), LLM</h3>
            <Link to="/profile" className="view-profile-button">View Profile</Link>
          </div>

          <div className="partner-card">
            <img src={girl} alt="Temilola" className="partner-image" />
            <h3 className="partner-name">TEMILOLA B. OLAEGBE. LLB. (Hons), LLM (in view)</h3>
            <Link to="/profile2" className="view-profile-button">View Profile</Link>
          </div>
        </div>
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
    </>
  );
}
