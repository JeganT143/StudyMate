import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Super Learning</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#login" className="btn login">Login</a></li>
        <li><a href="#signup" className="btn signup">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
