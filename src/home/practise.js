import React from 'react';
import '../home/practice.css';

const practiceAreas = [
  {
    number: '1',
    title: 'INTELLECTUAL PROPERTY/CYBER-LAW',
    text: 'The firm renders legal service to clients (Corporate and private individuals) on how best to protect their innovations, ideas, concept as their intellectual properties ranging from Copyright, Trade Mark, Trade Name and Patent...'
  },
  {
    number: '2',
    title: 'PROPERTY AND REAL ESTATE',
    text: 'The firm acts for clients in various property dealings and transactions. We provide legal service on lease, purchase and sale of real properties...'
  },
  {
    number: '3',
    title: 'INSURANCE',
    text: 'Our reputation as the legal advisors to few market leaders of the Nigerian insurance industry is unequaled...'
  },
  {
    number: '4',
    title: 'LITIGATION AND MEDIATION',
    text: 'Our firm is one managed and run by seasoned litigators who are abreast with recent decisions of the apex court of Nigeria...'
  },
  {
    number: '5',
    title: 'MARITIME & AVIATION LAW',
    text: 'We are active in all areas of International Trade, Maritime and Transportation Law. Some of our team are experts in transportation and admiralty matters...'
  },
  {
    number: '6',
    title: 'DEBT RECOVERY',
    text: 'We also major in cases of liquidated money demand, and other debt recovery cases from individuals and corporations...'
  },
  {
    number: '7',
    title: 'MEDIA & ENTERTAINMENT',
    text: 'Our deep knowledge of Media and Entertainment business as well as the practices and conventions of the local Industry...'
  },
  {
    number: '8',
    title: 'GARNISHEES',
    text: 'We equally have extensive experience in this area and with utmost diligence, we ensure no Order Absolute is made against our client...'
  }
];

const PracticeAreas = () => {
  return (
    <div className="practice-areas-container">
      <div className="head">
        <h1>Practice Areas</h1>
      </div>
      <div className="areas-grid">
        {practiceAreas.map((area, index) => (
          <div className="area-box" key={index}>
            <div className="area-number">{area.number}</div>
            <h2 className="area-title">{area.title}</h2>
            <p className="area-text">{area.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeAreas;
