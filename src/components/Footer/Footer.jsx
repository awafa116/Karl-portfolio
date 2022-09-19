import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <img src='img/footer-logo.svg' alt='karl logo' className='footer-logo' />
          <div className='footer-links'>
            <a href='#hero' className='link'>
              Home
            </a>
            <a href='#hero' className='link'>
              Services
            </a>
            <a href='#hero' className='link'>
              Work
            </a>
            <a href='#hero' className='link'>
              About
            </a>
            <a href='#hero' className='link'>
              Contacts
            </a>
          </div>
        </div>
        <p className='copyright'>Copyright @2022 Karl</p>
      </div>
    </footer>
  );
};

export default Footer;
