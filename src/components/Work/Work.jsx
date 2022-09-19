import React from 'react';
import Films from './Films/Films';
import Pics from './Pics/Pics';

const Work = () => {
  return (
    <section className='work-sec'>
      <h2 className='sec-title'>
        <span className='hash'>#</span>my work
      </h2>
      <Films />
      <Pics />
    </section>
  );
};

export default Work;
