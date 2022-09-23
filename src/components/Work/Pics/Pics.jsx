import React from 'react';
import './Pics.css';
import data from '../../../data/pics';
import { MdFullscreen } from 'react-icons/md';

const Pics = () => {
  // firs column of pics
  const col1 = data.slice(0, 7).map(pic => {
    return (
      <div className='pic'>
        <img key={pic.id} src={pic.thumb} />
        <MdFullscreen className='icon' />
      </div>
    );
  });

  // second column of pics
  const col2 = data.slice(7, 14).map(pic => {
    return (
      <div className='pic'>
        <img key={pic.id} src={pic.thumb} />
        <MdFullscreen className='icon' />
      </div>
    );
  });

  // third column of pics + cta card
  const col3 = data.slice(14, data.length).map(pic => {
    return (
      <>
        {pic.id === 20 && (
          <div className='cta-card'>
            <h3>like what you see?</h3>
            <a href='#' className='primary-cta'>
              give it a try
            </a>
            <img src='img/like.png' alt='thumbs up 3d render' />
          </div>
        )}
        <div className='pic'>
          <img key={pic.id} src={pic.thumb} />
          <MdFullscreen className='icon' />
        </div>
      </>
    );
  });

  return (
    <section className='pics-sec'>
      <div className='container'>
        <div className='row'>
          <div className='col'>{col1}</div>
          <div className='col'>{col2}</div>
          <div className='col'>{col3}</div>
        </div>
      </div>
    </section>
  );
};

export default Pics;
