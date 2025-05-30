import React, { useState } from 'react';
import '../home/practice.css';
import { Link } from 'react-router-dom';
import logo from '../asset/Mn11.png';
import Z from "../asset/z7.jpg";
import Z1 from "../asset/z1.jpg"
import Z2 from "../asset/z4.jpg"
import Z3 from "../asset/z2.jpg"
import Z4 from "../asset/z3.jpg"
import Z5 from "../asset/z5.jpg"
import Z6 from "../asset/z.jpg"
import Z7 from "../asset/z6.jpg"


const practices = [
  {
    title: 'INTELLECTUAL PROPERTY/CYBER-LAW',
    text: 'The firm renders legal service to clients (Corporate and private individuals) on how',
    image: Z,
  },
  {
    title: 'PROPERTY AND REAL ESTATE',
    text: 'The firm acts for clients in various property dealings and transactions.',
    image: Z1,
  },
  {
    title: 'INSURANCE',
    text: 'Our reputation as the legal advisors to few market leaders of the Nigerian insurance',
    image: Z2,
  },
  {
    title: 'LITIGATION AND MEDIATION',
    text: 'Our firm is one managed and run by seasoned litigators who are abreast with recent',
    image: Z3,
  },
  {
    title: 'MARITIME & AVIATION LAW',
    text: 'We are active in all areas of International Trade, Maritime and Transportation Law.',
    image: Z4,
  },
  {
    title: 'DEBT RECOVERY',
    text: 'We also major in cases of liquidated money demand, and other debt recovery cases from',
    image: Z5,
  },
  {
    title: 'MEDIA & ENTERTAINMENT',
    text: 'Our deep knowledge of Media and Entertainment business as well as the practices and',
    image: Z6,
  },
  {
    title: 'GARNISHEES',
    text: 'We equally have extensive experience in this area and with utmost diligence, we ensure no',
    image: Z7,
  }
];

export default function PracticeAreas() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="nav-header">
        <div className="logo-block">
          <img src={logo} alt="logo" className="logo-img" />
          <span>MANTRA <br /> ATTORNEYS LP</span>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/practice" className="active-link">Practice Areas</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/insight">Insight</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/csr">CSR</Link>
          <button className="sign-in">Sign In</button>
        </nav>
      </header>

      <section className="practice-hero">
        <h1>Practice Areas</h1>
      </section>

      <section className="practice-grid">
        {practices.map((p, i) => (
          <div className="practice-card" key={i}>
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p>{p.text}</p>
            <Link className="learn-more" to={`/practice/${i}`}>Learn More ➤</Link>
          </div>
        ))}
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
