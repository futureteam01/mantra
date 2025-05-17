// Signup.jsx
import React, { useState } from 'react';
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
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-api-endpoint.com/signup', formData);
      toast.success('Signup successful!');
      console.log(response.data);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed. Please try again.');
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
    </div>
  );
}

export default Signup;
