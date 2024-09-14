import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WebDevelopment from './components/WebDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Footer from './components/Footer';
import Bookings from './components/Bookings';
import Projects from './components/Projects';
import './assets/css/Global.css'
const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses/full-stack-web-development" element={<WebDevelopment />} />
      <Route path="/courses/data-science" element={<DataScience />} />
      <Route path="/courses/cyber-security" element={<CyberSecurity />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
