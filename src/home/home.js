import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

import logo from '../asset/Mn11.png';
import statue from '../asset/M1.png';

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-container">
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
          <a href="/csr">Corporate Social Responsibility</a>
          <button className="signin-btn" onClick={() => navigate('/signin')}>
            Sign In
          </button>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
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
  );
}

export default Home;
