// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../profile/signin.css';
import logo from '../asset/Mn11.png';
import balanceImage from '../asset/lagos.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackButton from '../back/back';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fusionbackend-iota.vercel.app/api/users/login', formData);
  
      localStorage.setItem('userId', res.data.user._id);
  
      toast.success('Login successful!');
      navigate('/staffing');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <div className="overlay">
          <div style={{ position: "absolute", top: "0", left: "0", display: "flex", alignItems: "center", padding: "10px" }}>
                  <img src={logo} alt="Mantra Attorneys LP" style={{ height: "50px", marginRight: "10px" }} />
                    <h1 style={{ margin: 0, fontSize: "1.2rem", lineHeight: "1.2" }}>
                    MANTRA<br />ATTORNEYS LP
                  </h1>
                  </div>
        </div>
        <img src={balanceImage} alt="Balance Scales" className="background-img" />
      </div>

      <div className="right-section">
        <div className="form-box">
        <div className="top-right-heading">
        
        <a href="/staff" className="admin-link-btn">Admin Signin</a>
        </div>
        <h2>Staff Loggin</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {/* <label htmlFor="role">Roles</label>
            <select name="role" id="role" value={formData.role} onChange={handleChange}>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select> */}
            <button type="submit" className="signup-btn">Sign In</button>
          </form>
        </div>
      </div>
      <ToastContainer />
      <BackButton />
    </div>
  );
}

export default Signup;
