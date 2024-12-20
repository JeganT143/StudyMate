import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Learn Something New</h1>
        <p>Everyday, Anywhere, Anytime</p>
        <form className="header-form">
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Start 7 Days Free</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
