import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/TechZoomLogo.png'
import '../assets/css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDropdownClick = (e, setter, otherSetter) => {
    e.preventDefault();
    e.stopPropagation();
    setter(prev => !prev);
    if (otherSetter) otherSetter(false); // Close the other dropdown
  };

  

  return (
    <header className={`${isActive ? 'active' : ''}`}>
      <nav className="navbar">
        <NavLink to='/'>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h1>Techzoom</h1>
        </div>
        </NavLink>

        <div className="burger" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink exact to="/" activeClassName="active-link" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/about" activeClassName="active-link" onClick={toggleMenu}>
              About
            </NavLink>
          </li>

          <li
            className={isMobile ? 'mobile-dropdown' : ''}
            onClick={(e) => isMobile && handleDropdownClick(e, setIsCoursesOpen)}
            onMouseEnter={() => !isMobile && setIsCoursesOpen(true)}
            onMouseLeave={() => !isMobile && setIsCoursesOpen(false)}
          >
            <NavLink exact to="/courses" activeClassName="active-link" onClick={(e) => e.preventDefault()}>
              Courses
            </NavLink>
            {(isCoursesOpen || !isMobile) && (
              <ul className="dropdown">
                <li><NavLink to="/courses/full-stack-web-development" onClick={toggleMenu}>Full Stack Web Development</NavLink></li>
                <li><NavLink to="/courses/data-science" onClick={toggleMenu}>Data Science</NavLink></li>
                <li><NavLink to="/courses/cyber-security" onClick={toggleMenu}>Cyber Security</NavLink></li>
                {/* <li><NavLink to="/courses/networking" onClick={toggleMenu}>Networking Fundamentals</NavLink></li> */}
              </ul>
            )}
          </li>
          
          <li>
            <NavLink exact to="/projects" activeClassName="active-link" onClick={toggleMenu}>
              Projects
            </NavLink>
          </li> 

          <li>
            <NavLink exact to="/contact" activeClassName="active-link" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li> 

          {/* <li
            className={isMobile ? 'mobile-dropdown' : ''}
            onClick={(e) => isMobile && handleDropdownClick(e, setIsServicesOpen, setIsCoursesOpen)}
            onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
            onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
          >
            <NavLink exact to="/services" activeClassName="active-link" onClick={isMobile ? (e) => e.preventDefault() : toggleMenu}>
              Services
            </NavLink>
            {(isServicesOpen || !isMobile) && (
              <ul className="dropdown">
                <li><NavLink to="/services/marketing" onClick={toggleMenu}>Marketing Services</NavLink></li>
                <li><NavLink to="/services/contact" onClick={toggleMenu}>Contact Services</NavLink></li>
                <li><NavLink to="/services/email-marketing" onClick={toggleMenu}>Email Marketing</NavLink></li>
                <li><NavLink to="/services/data-solutions" onClick={toggleMenu}>Data Solutions</NavLink></li>
              </ul>
            )}
          </li> */}

          <li id='contact-link'>
            <NavLink exact to="/bookings" activeClassName="active-link" onClick={toggleMenu}>
              Book now
            </NavLink>
          </li>
        </ul>

        <div className='get-started'>
          <NavLink to='/bookings'>
            Book now
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
