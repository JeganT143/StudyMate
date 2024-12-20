import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Super Learning</div>
        <p>© 2024 Super Learning. All rights reserved.</p>
        <div className="social-icons">
          <a href="#facebook">FB</a>
          <a href="#twitter">TW</a>
          <a href="#instagram">IG</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
