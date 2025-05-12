// src/components/AboutUs.js
import React from 'react';
import '../about/about.css';
import bookImage from '../asset/M3.jpg'; // Replace with your actual image path
import legalImage from '../asset/M5.jpg'; // Replace with your actual image path

function AboutUs() {
  return (
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

      <section className="about-images">
        <img src={bookImage} alt="Law book and gavel" />
        <img src={legalImage} alt="Legal services" />
      </section>
    </div>
  );
}

export default AboutUs;
