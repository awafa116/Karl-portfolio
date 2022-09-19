import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isColored, setIsColored] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setIsColored(true);
    } else {
      setIsColored(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={isColored && 'colored'}>
      <div className='container'>
        <img src='img/logo.svg' alt="karl's logo" className='logo' />
        <div className='nav-links'>
          <a href='#' className='link active'>
            Home
          </a>
          <a href='#' className='link'>
            Services
          </a>
          <a href='#' className='link'>
            Work
          </a>
          <a href='#' className='link'>
            About
          </a>
          <div className='index'></div>
        </div>
        <a href='#' className='nav-cta'>
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
