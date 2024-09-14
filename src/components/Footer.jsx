import React from 'react'
import '../assets/css/Footer.css'
import email from '../assets/img/Email-footer.png'
import phone from '../assets/img/Phone-footer.png'
import Logo from '../assets/img/Transparent-Logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <div className='footer'>
      <div className='footer-section'>
        <div className='footer-logo'>
            <img src={Logo} alt="Logo" />
            <h1>Techzoom</h1>
        </div>
        <div className='footer-main1'>
           <p>TechZoom is an innovative e-learning platform committed to delivering high-quality, practical education to learners worldwide. We empower students to master cutting-edge technologies and achieve their career goals.</p>
           <section>
            <h1>Get in touch</h1>
            <p><a href="mailto:karthi@gmail.com"><img src={email} alt="email" /> support@techzoom.com</a></p>
            <p><a href="tel:919353225341"><img src={phone} alt="phone" /> +91 9353225341</a></p>
           </section>
           <ul>
            <li><h1>Quick Links</h1></li>
           <li>
            <Link to='/'>Home</Link>
           </li>
           <li>
            <Link to='/about'>About</Link>
           </li>
           <li>
            <Link to='/projects'>Projects</Link>
           </li>
           <li>
            <Link to='/contact'>Contact</Link>
           </li>
           </ul>
        </div>

        <div className="last-section">
          <p>© 2024 Techzoom. All rights reserved.</p>
        </div>
      </div>
   </div>
  )
}

export default Footer
