import React from 'react';
import { Link } from 'react-router-dom';
// import Profile from '../profile/profile';
import prof from '../asset/prof.jpg';
import girl from '../asset/girl.jpg';
import '../home/partner.css';

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <h1>Partners</h1>
      </div>
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
  );
}
