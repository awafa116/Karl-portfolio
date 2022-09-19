import React from 'react';
import './Hero.css';
import hero from '../../images/hero.png';
import { AiFillEye, AiOutstrapUser } from 'react-icons/ai';
import { FaUserFriends, FaImages, FaClock } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  const stats = [
    {
      id: 1,
      icon: [<FaUserFriends className='icon' />],
      count: '40+',
      description: 'happy customers',
    },
    {
      id: 1,
      icon: [<FaImages className='icon' />],
      count: '400+',
      description: 'delivered projects',
    },
    {
      id: 1,
      icon: [<FaClock className='icon' />],
      count: '3.5k+',
      description: 'experience hours',
    },
  ];

  const statsElements = stats.map(stat => {
    return (
      <div className='stat'>
        {stat.icon}
        <div className='text'>
          <h3 className='count'>{stat.count}</h3>
          <p className='description'>{stat.description}</p>
        </div>
      </div>
    );
  });
  return (
    <section className='hero-sec'>
      <div className='container'>
        <div className='hero--text'>
          <h1 className='title'>
            <span className='highlight'>Karl</span> is here to capture your best memories{' '}
            <span>📸</span>
          </h1>
          <p className='subtitle'>
            I believe that a valuable memory is meant to be shared with the ones we love. and what's
            a better way to share a memory than a lens and a shutter
          </p>
          <div className='cta-container'>
            <a className='primary-cta' href='#'>
              Hire Me <BsArrowRight className='icon' />
            </a>
            <a className='secondary-cta' href='#'>
              <AiFillEye className='icon' /> view my work
            </a>
          </div>
        </div>
        <ul className='straps'>
          <li className='strap strap1'></li>
          <li className='strap strap2'></li>
          <li className='strap strap3'></li>
          <li className='strap strap4'></li>
          <li className='strap strap5'></li>
        </ul>
        <img src={hero} alt='3d orange camera figure' className='hero--img' />
      </div>
      <div className='stats'>{statsElements}</div>
    </section>
  );
};

export default Hero;
