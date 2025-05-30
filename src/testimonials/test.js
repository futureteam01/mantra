import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../testimonials/test.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../asset/Mn11.png"
import img1 from "../asset/p5.jpg"
import img2 from "../asset/p6.jpg"
import img3 from "../asset/p1.jpg"
import img4 from "../asset/p4.jpg"
import img5 from "../asset/p3.jpg"
import img6 from "../asset/p2.jpg"
const testimonials = [
    
  {
    name: "Godwin",
    location: "Lagos, Nigeria",
    image: img1,
    stars: 5,
    text: "Mantra provided exceptional service and expertise. They listened to my concerns, developed a solid strategy, and achieved a successful outcome. Their professionalism and dedication gave me peace of mind during a challenging time."
  },
  {
    name: "Toyin",
    location: "Lagos, Nigeria",
    image: img2,
    stars: 5,
    text: "Mantra Lawfirm exceeded my expectations! Their expertise, professionalism, and personalized service made a stressful experience manageable. They listened, advised, and fought tirelessly for my case. I’m grateful for their dedication and results."
  },
  {
    name: "Adebisi",
    location: "Ibadan, Nigeria",
    image: img3,
    stars: 5,
    text: "I highly recommend Mantra Attorneys for their expertise, compassion, and results-driven approach. They took the time to understand my unique situation and delivered personalized solutions."
  },
  {
    name: "Ikechukwu",
    location: "Port Harcourt, Nigeria",
    image: img4,
    stars: 5,
    text: "I was blown away by the level of care and attention I received from Mantra Lawfirm. They took the time to understand my situation, provided clear guidance, and delivered exceptional results."
  },
  {
    name: "Maryam",
    location: "Kano, Nigeria",
    image: img5,
    stars: 5,
    text: "I was impressed by Mantra’s professionalism, expertise, and communication. They kept me informed every step of the way and delivered outstanding results."
  },
  {
    name: "Adetoun",
    location: "Abuja, Nigeria",
    image: img6,
    stars: 5,
    text: "Mantra Law firm went above and beyond for me. Their team is knowledgeable, responsive, and dedicated. They fought hard for my rights and achieved a successful outcome."
  }
];

export default function TestimonialsPage() {
 const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="testimonials-page">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Mantra Attorneys LP" className="logo" />
          <h1>Mantra Attorneys LP</h1>
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/practice">Practice Areas</a>
          <a href="/partners">Partners</a>
          <a href="/insight">Insight</a>
          <a href="/testimonials" className="active-link">Testimonials</a>
          <a href="/csr">CSR</a>
          <button className="signin-btn" onClick={() => navigate('/staff')}>
            Sign In
          </button>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>

      <header className="header-banner">
        <h2>Testimonials</h2>
      </header>

      <main className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <div className="testimonial-content">
              <p>{t.text}</p>
              <h4>{t.name}</h4>
              <span>{t.location}</span>
              <div className="stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

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

