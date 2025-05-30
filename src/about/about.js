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

      <footer className="footer-section">
        <div className="footer-box left-box">
          <h2>DO YOU NEED LEGAL HELP?</h2>
          <p>Give us a call: +234 813 989 5245</p>
        </div>

        <div className="footer-box center-box">
          <h2>&nbsp;</h2>
          <p>Email us at: mantraattorneyslp@gmail.com</p>
        </div>

        <div className="footer-box right-box">
          <h2>&nbsp;</h2>
          <p>Visit us at: Suite A11 Murg Plaza, Area 10, Garki Abuja</p>
        </div>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/mantraattorneys?igsh=MWc1enc2bXJ6MXhrcA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576712904817&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
