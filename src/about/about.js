import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../about/about.css';
import logod from '../asset/Mn11.png';

function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="headerd">
        <div className="logo-title-block">
          <img src={logod} alt="Mantra Attorneys LP" className="brand-logos" />
          <p className="brand-names">
            MANTRA <br /> ATTORNEYS LP
          </p>
        </div>

        <nav className={`nave ${menuOpen ? 'open' : ''}`}>
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

      <div className="about-container">
        <section className="about-text">
          <h1>About Us</h1>
          <p>
            <strong>MANTRA ATTORNEYS LP</strong> is a leading law firm registered with the Corporate Affairs Commission (BN 7961308),
            comprising brilliant senior and young vibrant counsels, supported by a dedicated team of staff.
          </p>
          <p>
            <strong>REPUTATION AND EXPERTISE:</strong> Since its inception, our firm has earned a reputation for delivering efficient and
            exceptional legal services. Our ability to provide legal services across various jurisdictions, both within and outside Nigeria,
            demonstrates our commitment to meeting the diverse needs of our clients.
          </p>
          <p>
            <strong>OUR APPROACH:</strong> We adopt a team-led approach, leveraging the collective expertise of our partners and staff to deliver
            tailored solutions that meet the unique needs of each client. Our collaborative approach ensures that every client receives
            comprehensive guidance and support, driving successful outcomes.
          </p>
          <p>
            <strong>SERVICE DELIVERY:</strong> We pride ourselves on our efficient and quick service delivery, consistently exceeding client
            expectations. Our goal is to provide legal services at the highest professional level, delivering effective solutions in the following
            areas: Corporate, Company & Commercial Matters/Regulatory; Intellectual Property/ Cyber-Law Property & Real Estate; Insurance;
            Litigation & Mediation; Maritime & Aviation Law; Debt Recovery; Media & Entertainment; Garnishees.
          </p>
        </section>
      </div>

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

export default AboutUs;
