import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="  bg-[url('/imgs/mobileHeader3.jpg')] bg-cover bg-center bg-no-repeat px-6 py-20">
            <div className="flex h-full  w-full flex-col gap-10 bg-alphaDark/60 p-8 backdrop-blur-sm">
              <h2 className="text-left text-4xl font-semibold tracking-widest text-gray">
                Performance Campaigns
              </h2>
              <h3 className="text-left text-lg leading-[2.1rem] text-gray ">
                Through our Performance Web and App Campaigns we can drive your
                audience to make specific actions such as leads, conversions and
                installs on your website or app
              </h3>
              <h3 class="font-regular relative ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
                <span class="relative cursor-default">Contact Us</span>
              </h3>
              {/* <div className="group flex cursor-pointer gap-2">
                <a
                  href="#"
                  className="text-md font-regular text-white  transition duration-200 ease-in-out group-hover:text-bravo "
                >
                  Contact Us
                </a>
                <span
                  aria-hidden="true"
                  className="translate-x-0 text-white transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:text-bravo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div> */}
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
