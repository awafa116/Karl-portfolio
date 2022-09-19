import React, { useState } from 'react';
import data from '../../../data/films';
import { BsFillPauseFill, BsPlayFill } from 'react-icons/bs';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Mousewheel, Scrollbar } from 'swiper';

import './Films.css';

const Films = () => {
  const [activeFilm, setActiveFilm] = useState(1);
  // const [isPlaying, setIsPlaying] = useState(false);

  const thumbs = data.map(film => {
    return (
      <SwiperSlide key={film.id}>
        <div className={`thumb ${film.id === activeFilm && 'playing'}`}>
          <img src={film.backdrop} onClick={() => openVideo(film.id)}></img>
          {film.id === activeFilm ? (
            <BsFillPauseFill className='icon playing' />
          ) : (
            <BsPlayFill className='icon' />
          )}
        </div>
      </SwiperSlide>
    );
  });

  const openVideo = id => {
    if (id === activeFilm) return;
    setActiveFilm(id);
  };
  return (
    <section className='films-sec'>
      <div className='container'>
        <div className='grid'>
          <video className='video' src={data[activeFilm - 1].url} autoplay loop muted></video>
          <div className='thumbs'>
            <Swiper
              direction={'vertical'}
              slidesPerView={2}
              spaceBetween={20}
              mousewheel={true}
              scrollbar={{
                hide: false,
              }}
              modules={[Mousewheel, Scrollbar]}
            >
              {thumbs}
            </Swiper>
          </div>
          {/* <Swiper
          className='thumbs--swiper'
          direction={'vertical'}
          slidesPerView={2}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
        >
          {thumbs}
        </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default Films;
