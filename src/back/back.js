// BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './back.css'; // Make sure to create this CSS file

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate('/')}>
      ⬅ Back
    </button>
  );
};

export default BackButton;
