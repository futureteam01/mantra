// Signup.jsx
import React, { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../profile/signin.css';
import logo from '../asset/Mn11.png';
import balanceImage from '../asset/lagos.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'staff'
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
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      toast.success('Loggin successful!');
      console.log(response.data);
      navigate('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Loggin failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <div className="overlay">
          <img src={logo} alt="Mantra Attorneys LP" className="logo" />
          <h1 className="brand-text">MANTRA<br />ATTORNEYS LP</h1>
        </div>
        <img src={balanceImage} alt="Balance Scales" className="background-img" />
      </div>

      <div className="right-section">
        <div className="form-box">
        <div className="top-right-heading">
        
        <a href="/staff" className="admin-link-btn">Staff Portal</a>
        </div>
        <h2>Admin Login</h2>
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
            
            <button type="submit" className="signup-btn">Sign In</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
