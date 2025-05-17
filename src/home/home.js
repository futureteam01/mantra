// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

import logo from '../asset/Mn11.png';
import statue from '../asset/M1.png';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ───────── NAV + HERO ───────── */}
      <div className="home-container">
        <header className="header">
          <div className="brand-block">
            <img src={logo} alt="Mantra Attorneys LP" className="brand-logo" />
            <p className="brand-name">
              MANTRA <br /> ATTORNEYS LP
            </p>
          </div>

          <nav className="nav">
            <a href="/about">About</a>
            <a href="#practice">Practice Areas</a>
            <a href="/partners">Partners</a>
            <a href="#csr">Corporate Social Responsibility</a>
            <button className="signin-btn" onClick={() => navigate('/signin')}>
              Sign In
            </button>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-text">
            <p className="welcome">Welcome to<br />MANTRA ATTORNEYS LP</p>
            <h1 className="headline">
              We&nbsp;Deliver&nbsp;Efficient <br />
              And&nbsp;Exceptional <br />
              Legal&nbsp;Services
            </h1>
            <button className="cta-btn" onClick={() => navigate('/contact')}>
              Contact Us Today
            </button>
          </div>

          <div className="hero-image">
            <img src={statue} alt="Lady Justice" className="statue" />
          </div>
        </section>
      </div>

     
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h3>Call Us</h3>
            <p>+2348137997815</p>
          </div>

          <div className="footer-col">
            <h3>Email</h3>
            <p>mantraattorneys@gmail.com</p>
          </div>

          <div className="footer-col">
            <h3>Visit</h3>
            <p>
              1st Chancery House, No&nbsp;5,<br />C &amp; I Leasing Drive, Lekki&nbsp;Phase&nbsp;1
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Mantra Attorneys LP</span>
          <a href="#policy">Privacy Policy &amp; Terms of Use</a>
        </div>
      </footer>
    </>
  );
}

export default Home;