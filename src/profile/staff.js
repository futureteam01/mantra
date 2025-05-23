// Signup.jsx
import React, { useState } from 'react';
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
  const [passwordVisible, setPasswordVisible] = useState(false);

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
      await axios.post('http://localhost:5000/api/auth/login', formData);
      toast.success('Login successful!');
      navigate('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
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
            {/* <a href="/signin" className="admin-link-btn"></a> */}
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
            <div className="password-wrapper">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePassword}
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? '🙈' : '👁️'}
              </button>
            </div>
            <button type="submit" className="signup-btn" style={{ color: 'white' }}>
              Sign In</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
