import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Data Import
import data from './data.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import './slider.css';

// import required modules
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className, name) {
      return '<span class="' + className + '">' + 'sads' + '</span>';
    },
  };

  return (
    <>
      <div className="flex lg:mx-auto lg:h-[50vh] lg:w-[80%] lg:bg-transparent">
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation, Scrollbar]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide>
              <div className="flex h-full w-full gap-10 lg:bg-transparent">
                <div className="flex h-full w-full flex-col bg-alpha px-6 py-14 pb-20 lg:w-[60%] lg:bg-transparent lg:p-0">
                  <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white lg:text-5xl lg:font-bold lg:text-alpha">
                    {item.name}
                  </h2>
                  <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white lg:text-xl lg:font-semibold lg:leading-[2.3rem] lg:text-alpha ">
                    {item.text}
                  </h3>
                  <h3 className="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto lg:text-2xl lg:font-bold lg:text-alpha">
                    <span className="relative cursor-default">Contact Us</span>
                  </h3>
                </div>
                <img
                  src={item.img}
                  className="hidden lg:block lg:w-[40%] lg:object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

// bg - [url('/imgs/mobileHeader3.jpg')];
