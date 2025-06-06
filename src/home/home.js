import React, {useState} from "react";
import logo from "../asset/Mn11.png"
import About from "../asset/about.jpg"
import Testi from "../asset/tes.jpg"
import A1 from "../asset/z7.jpg"
import A2 from "../asset/z1.jpg"
import A3 from "../asset/z4.jpg"
import A4 from "../asset/z2.jpg"
import A5 from "../asset/z3.jpg"
import A6 from "../asset/z5.jpg"
import A7 from "../asset/z.jpg"
import A8 from "../asset/z6.jpg"
import "./home.css";

export default function App() {
  
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
 
  const practiceAreas = [
    { title: "Intellectual Property/Cyber Law", image: A1 },
    { title: "Property and Real Estate", image: A2 },
    { title: "Insurance", image: A3 },
    { title: "Litigation and Mediation", image: A4 },
    { title: "Maritime & Aviation Law", image: A5 },
    { title: "Debt Recovery", image: A6 },
    { title: "Media & Entertainment", image: A7 },
    { title: "Garnishees", image: A8 }
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Mantra Attorneys LP" />
          <h4>MANTRA <br></br>ATTORNEYS LP</h4>
        </div>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/practice">Practice Areas</a>
          <a href="/partners">Partners</a>
          <a href="/insight">Insight</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/csr">CSR</a>
          <a href="/staff" className="sign-in">Sign In</a>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>☰</div>
      </header>

      <section className="hero">
        <p className="welcome">Welcome to MANTRA ATTORNEYS LP</p>
        <h1>
          We Deliver Efficient <br /> And Exceptional <br /> Legal services
        </h1>
        <button className="cta" onClick={() => window.location.href = '/contact'}>
        Contact Us
      </button>
      </section>

      <section className="about" id="about">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            MANTRA ATTORNEYS LP is a leading law firm registered with the
            Corporate Affairs Commission (BN 7795308), comprising brilliant
            senior and young vibrant counsels, supported by a dedicated team
            of staff.
          </p>
          <p>
            REPUTATION AND EXPERTISE: Since its inception, our firm has earned
            a reputation for delivering efficient and exceptional legal
            services. Our ability to provide legal services across various
            jurisdictions, both within and outside Nigeria, demonstrates our
            commitment to meeting the diverse needs of our clients.
          </p>
          <button className="read-more">Read More</button>
        </div>
        <img src={About} alt="About Us" className="about-img" />
      </section>

      <section className="practice" id="practice">
        <h2>Practice Areas</h2>
        <div className="grid">
          {practiceAreas.map(({ title, image }, i) => (
            <div key={i} className="practice-card">
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>What Our Clients<br />Say About Us</h2>
      </div>

      <div className="testimonial-content">
        <div className="testimonial-text">
          <p className="quote">“</p>
          <p>
            Manta provided exceptional service and expertise. They listened to my concerns,
            developed a solid strategy, and achieved a successful outcome.
            Their professionalism and dedication gave me peace of mind during a challenging time.
          </p>
          <h4>Godwin</h4>
          <p className="location">Lagos Nigeria</p>
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <button className="testimonial-button">View All Testimonials</button>
        </div>

        <div className="testimonial-image">
          <img src={Testi} alt="Client testimonial" />
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
    </div>
  );
}
