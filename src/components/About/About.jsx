import React from 'react';
import './About.css';
import about from '../../images/about.png';
import Quotes from './Quotes/Quotes';
import { HiDownload } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about-sec'>
      <div className='container'>
        <h2 className='sec-title'>
          <span className='hash'>#</span>about me
        </h2>
        <div className='grid'>
          <div className='text'>
            <h3 className='title'>
              hey, i'm <span className='highlight'>karl</span>
            </h3>
            <p className='info'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus maxime blanditiis
              illo aut ex molestias veniam veritatis, fuga architecto doloremque molestiae ducimus
              iste, distinctio facere?
            </p>
            <p className='skills-lable'>I Do :</p>
            <div className='skills'>
              <p className='skill'>📷 photography</p>
              <p className='skill'>🎥 film making</p>
              <p className='skill'>🎬 video editing</p>
            </div>
            <a href='' className='primary-cta'>
              Résumé <HiDownload className='icon' />
            </a>
          </div>
          <img src={about} alt='portrait of karl hanging a camera aroung his neck' />
        </div>
      </div>
      <Quotes />
    </section>
  );
};

export default About;
