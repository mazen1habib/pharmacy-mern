import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/style-section5.css'

// import required modules
import {  Autoplay,Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='banner1'></SwiperSlide>
        <SwiperSlide className='banner2'><h2>Must-Have Marvels!</h2>
        <p>Discover the ultimate secrets to radiant skin and luscious <br/> locks with these trending products that <br/>are truly worth the hype.</p></SwiperSlide>
        <SwiperSlide className='banner3'></SwiperSlide>
        <SwiperSlide className='banner4'><h2>Radiant Natural Glow <br/> Guaranteed!</h2>
        <p>Experience flawless radiance with Maybelline Fit Me Fresh Tint.<br/> A multi-purpose product that loads your skin with makeup + skincare  <br/>benefits in one swipe.</p></SwiperSlide>
        <SwiperSlide className='banner5'></SwiperSlide>
      </Swiper>
    </>
  );
}