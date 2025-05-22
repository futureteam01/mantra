import React from 'react';
import '../contact/csr.css';
import lawyerGown from '../asset/rob.webp';     // replace with your path
import lawBooks from '../asset/book.jpg';     // replace with your path


const CorporateSocialResponsibility = () => {
  return (
    <div className="csr-wrapper">
      <div className="csr-top-section">
        <div className="csr-text">
          <h1>Corporate Social Responsibility</h1>
          <p>
            Our firm is committed to making strong engagement towards giving back to the society
            through pro bono legal advice, charitable deeds and educational initiatives and programs.
            We sometimes undertake pro bono works to help tackle global humanitarian issues. We remain
            resolute and determined in supporting access to justice and community initiatives for the
            homeless and other socially disadvantaged groups.
          </p>
          <p>
            Be assured of our highest regards as we look forward to working with you.
          </p>
        </div>
        <div className="csr-image">
          <img src={lawyerGown} alt="Lawyer Gown" />
        </div>
      </div>

      <div className="csr-banner">
        <img src={lawBooks} alt="Law Books and Justice" />
      </div>
    </div>
  );
};

export default CorporateSocialResponsibility;