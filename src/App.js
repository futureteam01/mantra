import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
