import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRouts;
