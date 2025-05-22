import React from 'react';
import '../mantra/profile1.css';
import profileImage from '../asset/prof.jpg'; 

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-left">
        <div className="profile-image-container">
          <img src={profileImage} alt="Samson A. Ogundele" />
          <p className="profile-name">
            GIDEON O. BALOGUN,<br />LL.B. (Hons), LLM
          </p>
        </div>
      </div>

      <div className="profile-right">
        <h1>Profile</h1>
        <p>
           Gideon O. Balogun is a seasoned legal practitioner with over thirteen years of experience
           in diverse areas of law, including criminal and civil litigation, administrative processes, 
           company regulations, compliance strategies, and data protection
        </p>
        <p>
           He holds a Bachelor of Laws (LL.B.) degree from Kogi State University and a Master of Laws (LL.M.) 
           degree from the University of Ilorin, demonstrating his strong educational foundation in law.
        </p>
        <p>
           Gideon possesses exceptional expertise in criminal and civil litigation, administrative processes, 
           company regulations, compliance strategies, personnel administration, corporate governance, and data 
           protection. His extensive experience has equipped him with a deep understanding of the complexities of 
           corporate law and regulation
        </p>
        <p>
          As a highly efficient and competent legal practitioner, Gideon excels in ensuring that companies comply 
          with and operate in accordance with statutory and legal provisions. His excellent organizational skills, 
          attention to detail, and methodical approach make him a valuable asset to any organization
        </p>
        <p>
          Gideon is well-presented, highly personable, and possesses a deep knowledge of corporate regulatory and company 
          rules. His ability to navigate complex legal issues with ease and provide expert guidance has earned him a 
          reputation as a trusted and reliable legal advisor.
        </p>
      </div>
    </div>
  );
};

export default Profile;
