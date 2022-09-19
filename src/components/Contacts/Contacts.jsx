import React from 'react';
import './Contacts.css';
import { IoMdSend } from 'react-icons/io';
// import twitter from 'img/twitter.png';
// import facebook from 'img/facebook.png';
// import insta from 'img/instagram.png';
// import linkedin from 'img/linkedin.png';

const Contacts = () => {
  return (
    <section className='contacts-sec'>
      <h2 className='sec-title'>
        <span className='hash'>#</span>contact me
      </h2>
      <form className='contact-form'>
        <h3 className='title'>
          something in mind? let's <span className='highlight'>talk</span>
        </h3>
        <div className='left'>
          <div className='input-container'>
            <label htmlFor='first-name'>first name</label>
            <input type='text' id='first-name' />
          </div>
          <div className='input-container'>
            <label htmlFor='second-name'>second name</label>
            <input type='text' id='second-name' />
          </div>
          <div className='input-container'>
            <label htmlFor='email'>email</label>
            <input type='email' id='email' />
          </div>
          <div className='input-container'>
            <label htmlFor='phone'>phone number</label>
            <input type='phone' id='phone' />
          </div>
        </div>
        <div className='right'>
          <div className='input-container'>
            <label htmlFor='subject'>subject</label>
            <input type='text' id='subject' />
          </div>
          <div className='input-container message'>
            <label htmlFor='message'>message</label>
            <textarea name='message' id='message' style={{ resize: 'none' }}></textarea>
          </div>
        </div>
        <button className='primary-cta'>
          send <IoMdSend className='icon' />
        </button>
        <div className='contacts'>
          <a href='#' className='social'>
            <img src='img/instagram.png' alt='Instagram' />
          </a>
          <a href='#' className='social'>
            <img src='img/twitter.png' alt='Twitter' />
          </a>
          <a href='#' className='social'>
            <img src='img/facebook.png' alt='Facebook' />
          </a>
          <a href='#' className='social'>
            <img src='img/linkedin.png' alt='Linkedin' />
          </a>
          <p className='personal'>
            +123-456-789 <br />
            email@example.com
          </p>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
