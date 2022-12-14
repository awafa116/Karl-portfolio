import React from 'react';
import './Services.css';
import { BsStars } from 'react-icons/bs';

const Services = () => {
  return (
    <section className='services-sec'>
      <div className='container'>
        <h2 className='sec-title'>
          I can offer <BsStars />
        </h2>
        <div className='grid'>
          <article className='service'>
            <h3 className='title'>photography</h3>
            <p className='info'>Photographic images and photo editing from A to Z</p>
            <a href='#' className='primary-cta'>
              book a session
            </a>
            <img src='img/photography.png' alt='' className='img' />
          </article>
          <article className='service'>
            <h3 className='title'>film making</h3>
            <p className='info'>filming cinematic scenes to keep your best memories alive</p>
            <a href='#' className='primary-cta'>
              book a session
            </a>
            <img src='img/filming.png' alt='' className='img' />
          </article>
          <article className='service'>
            <h3 className='title'>video editing</h3>
            <p className='info'>video editing like you’ve never seen before</p>
            <a href='#' className='primary-cta'>
              book a session
            </a>
            <img src='img/editing.png' alt='' className='img' />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
