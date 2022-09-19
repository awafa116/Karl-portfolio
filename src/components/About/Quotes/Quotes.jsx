import React, { useState } from 'react';
import quotes from '../../../data/quotes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/pagination';
// import quoteMark from 'img/quote-mark.png';

import './Quotes.css';
const Quotes = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const quotesElements = quotes.map((quote, i) => {
    return (
      <article className={`quote ${i === activeQuote && 'active'}`}>
        <img src={quote.avatar} className='avatar' />
        <p className='body'>{quote.quote}</p>
        <p className='author'>- {quote.auth}</p>
      </article>
    );
  });
  return (
    <section className='quotes-sec'>
      <div className='container'>
        <div className='quotes'>
          {/* <Swiper
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {quotesElements}
        </Swiper> */}
          {quotesElements}
          <img src='img/quote-mark.png' alt='' className='quote-mark left' />
          <img src='img/quote-mark.png' alt='' className='quote-mark right' />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
