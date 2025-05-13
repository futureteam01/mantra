import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact"
import Profile from "./profile/profile"
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
