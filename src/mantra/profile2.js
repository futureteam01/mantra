import React from 'react';
import '../mantra/profile1.css';
import profileImage from '../asset/girl.jpg'; 
import BackButton from '../back/back';

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-left">
        <div className="profile-image-container">
          <img src={profileImage} alt="Temilola B. Olaegbe" />
          <p className="profile-name">
            TEMILOLA B. OLAEGBE,<br />LL.B. (Hons), LLM in-view
          </p>
        </div>
      </div>

      <div className="profile-right">
        <h1>Profile</h1>
        <p>
           Temilola B. Olaegbe is a distinguished legal practitioner, admitted to the Nigerian Bar as a Barrister 
           and Solicitor of the Supreme Court of Nigeria.
           

        </p>
        <p>
           She earned her law degree from the prestigious Obafemi Awolowo University, laying the foundation for 
           her successful legal career
        </p>
        <p>
           As a core litigator, Temilola possesses vast experience across diverse levels of courts in Nigeria, 
           demonstrating her expertise and versatility in navigating complex legal matters. Throughout her career, 
           Temilola has handled a wide range of cases, including debt and asset recovery, receivership, 
           fundamental rights enforcement, breach of contract disputes, torts such as negligence, financial 
           and banking disputes, unfreezing of bank customers' accounts, and criminal cases
        </p>
        <p>
          In addition, Temilola has expertise in insurance law, matrimonial causes, and child custody disputes, 
          showcasing her ability to adeptly handle sensitive and complex matters. Her extensive experience and 
          diverse expertise make Temilola a highly skilled and effective litigator, dedicated to delivering exceptional 
          legal services to her clients
        </p>
        
      </div>
      <BackButton />
    </div>
  );
};

export default Profile;
