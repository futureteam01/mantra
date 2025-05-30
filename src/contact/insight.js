import React, { useState, useEffect } from 'react';
import '../contact/insight.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import POA from "../asset/gram2.jpg";
import WILL from "../asset/gram3.jpg";
import TRUST from "../asset/gram4.jpg";
import HEALTH from "../asset/gram5.jpg";
import logo from "../asset/Mn11.png";

const articles = [
  {
    id: 1,
    title: "Power of Attorney: This document grants someone (family member, lawyer, etc ) the legal authority to make decision on your behalf.",
    date: "May 23, 2025",
    image: POA,
    fullText: "A Power of Attorney is a legal document that grants someone the legal authority to make decisions on behalf of another person in financial, medical, or other matters..."
  },
  {
    id: 2,
    title: "Will and Testament: This document dictates how your asset will be distributed after your demise",
    date: "May 23, 2025",
    image: WILL,
    fullText: "A Will and Testament expresses how assets are distributed after death and who manages the estate. It includes executors, beneficiaries, and guardians for minors."
  },
  {
    id: 3,
    title: "Trust: A document which spells out who manages a property (trustee) and how the property should be managed and distributed",
    date: "May 23, 2025",
    image: TRUST,
    fullText: "A Trust is a legal arrangement where a trustee manages assets on behalf of beneficiaries. It helps with asset protection, care plans, and wealth distribution."
  },
  {
    id: 4,
    title: "Healthcare Directive: This document allows you make your wishes known regarding medical treatment in case you are unable to make those decisions yourself",
    date: "May 23, 2025",
    image: HEALTH,
    fullText: "Healthcare directives specify treatment preferences and appoint a healthcare proxy if you're unable to make decisions. It helps ensure your wishes are respected."
  },
];

export default function ArticleCards() {
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="brand-block">
          <img src={logo} alt="Mantra Attorneys LP" className="brand-logo" />
          <p className="brand-name">
            MANTRA <br /> ATTORNEYS LP
          </p>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {menuOpen && (
          <div className="close-menu" onClick={closeMenu}>
            &times;
          </div>
        )}

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/practice" onClick={closeMenu}>Practice Areas</a>
          <a href="/partners" onClick={closeMenu}>Partners</a>
          <a href="/insight" className="active" onClick={closeMenu}>Insight</a>
          <a href="/testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="/csr" onClick={closeMenu}>CSR</a>
          <button className="signin-btn" onClick={() => {
            closeMenu();
            navigate('/staff');
          }}>Sign In</button>
        </nav>
      </header>

      {/* Intro */}
      <div className="intro-text">
        <p>
          <strong>Must-have Documents That Guarantee Peace of Mind! </strong><br />
          Whether you're a parent, business owner, or have assets and responsibilities,
          having certain documents in place helps protect your future and your loved ones.
        </p>
      </div>

      {/* Article Cards */}
      <div className="card-container">
        {articles.map(article => (
          <div className="card" key={article.id}>
            <img src={article.image} alt={article.title} />
            <div className="card-body">
              <h3>{article.title.length > 80 ? article.title.substring(0, 80) + '...' : article.title}</h3>
              <p className="date">{article.date}</p>
              <button onClick={() => setSelected(article)}>View More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.title}</h2>
            <p>{selected.fullText}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
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
