// Profile.js
import React from 'react';
import '../profile/profile.css';
import profileImage from '../asset/pro.jpg'; 
import BackButton from '../back/back';

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-left">
        <div className="profile-image-container">
          <img src={profileImage} alt="Samson A. Ogundele" />
          <p className="profile-name">
            SAMSON A. OGUNDELE,<br />LL.B. (Hons), LLM
          </p>
        </div>
      </div>

      <div className="profile-right">
        <h1>Profile</h1>
        <p>
          Samson A. Ogundele is a seasoned legal practitioner with a strong educational
          foundation, having obtained his law degree from the University of Ilorin, Ilorin, Kwara
          State. He was called to the Nigeria Bar in 2018 and furthered his education with a
          Master’s in Law from the University of Lagos, demonstrating his commitment to academic
          excellence and professional development.
        </p>
        <p>
          Samson gained valuable experience in litigation and legal transactions when he joined the
          firm of Rotimi Jacobs SAN & Co., Lagos in 2020, a renowned full litigation law firm.
        </p>
        <p>
          Currently, Samson is expanding his expertise in various legal transactions, including
          e-commerce, technology advisory services, telecommunication laws, medical law,
          litigation, corporate, commercial, and property practices.
        </p>
        <p>
          As a prolific writer, Samson has authored numerous articles on law and humanities, both
          nationally and internationally, showcasing his expertise and thought leadership in the field.
        </p>
        <p>
          With over seven years of experience as a seasoned litigator, Samson possesses reasonable
          experience in Criminal Law, property law and Debt Recovery, providing expert guidance and
          representation to clients in these areas.
        </p>
      </div>
      <BackButton />
    </div>
  );
};

export default Profile;
