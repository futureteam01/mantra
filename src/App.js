import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact"
import Profile from "./profile/profile"
import Signin from "./profile/signin"
import Partner from "./home/partner"
import Staff from "./profile/staff"
import Admin from "./Admin/admin"
import StaffDashboard from "./Admin/staffland";
import Practice from "./home/practise"
import Profile1 from "./mantra/profile1"
import Csr from "./contact/csr"
import Profile2 from "./mantra/profile2"
import './App.css';

function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/csr" element={<Csr/>} />
        <Route path="/staffing" element={<StaffDashboard/>} />
        <Route path="/partners" element={<Partner/>} />
        <Route path="/practice" element={<Practice/>} />
        <Route path="/profile1" element={<Profile1/>} />
        <Route path="/profile2" element={<Profile2/>} />
        
      </Routes>
    </div>
  );
}

export default App;
