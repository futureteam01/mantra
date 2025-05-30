// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, formData);
  
      localStorage.setItem('userId', res.data.user._id);
  
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
            <a href="/signin" className="admin-link-btn">Staff Login</a>
             
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
      <BackButton />
    </div>
  );
}

export default Signup;
