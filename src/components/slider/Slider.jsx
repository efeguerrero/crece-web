import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className, name) {
      return '<span class="' + className + '">' + 'sads' + '</span>';
    },
  };

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex h-full ">
            <div className="flex h-full w-full flex-col bg-alpha px-6 py-14 pb-20 pr-12 backdrop-blur-sm">
              <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white">
                Performance Campaigns
              </h2>
              <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white ">
                Through our Performance Web and App Campaigns we can drive your
                audience to make specific actions such as leads, conversions and
                installs on your website or app
              </h3>
              <h3 class="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
                <span class="relative cursor-default">Contact Us</span>
              </h3>
            </div>
            <img
              src="/public/imgs/mobileHeader.jpg"
              class="hidden lg:inline-block lg:w-[50%] lg:object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full  w-full flex-col bg-charly px-6 py-14 pb-20 pr-12 backdrop-blur-sm">
            <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white">
              Design & Community Management
            </h2>
            <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white ">
              Do you need specific brand designs? Or someone to manage your
              social media portfolio? Let our team of experts design and manage
              your social media according to your needs.
            </h3>
            <h3 class="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
              <span class="relative cursor-default">Contact Us</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full w-full flex-col bg-delta px-6 py-14 pb-20 pr-12 backdrop-blur-sm">
            <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white">
              Branding Campaigns
            </h2>
            <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white ">
              Powerful brand awareness campaigns that reach your target audience
              through Programmatic, Google Ads, Facebook Ads and more.
            </h3>
            <h3 class="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
              <span class="relative cursor-default">Contact Us</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full  w-full flex-col bg-alpha px-6 py-14 pb-20 pr-12 backdrop-blur-sm">
            <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white">
              Programmatic
            </h2>
            <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white ">
              Our expert programmatic team will assist you to create powerful
              programmatic campaigns — App promotion, CTV, Display, Video, Audio
              and more. If you are a Publisher and you are interested in
              monetizing your inventory reach out to us.
            </h3>
            <h3 class="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
              <span class="relative cursor-default">Contact Us</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-20pr-16 flex  h-full w-full flex-col bg-charly px-6 py-14 backdrop-blur-sm">
            <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white">
              SEM & SEO
            </h2>
            <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white ">
              Position your business in the first SEO & SEM results.
            </h3>
            <h3 class="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
              <span class="relative cursor-default">Contact Us</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full  w-full flex-col bg-delta px-6 py-14 pb-20 pr-12 backdrop-blur-sm">
            <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white">
              Audio Campaigns
            </h2>
            <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white ">
              Advertise your brand on the top US streaming services such as
              Pandora, iHeartRadio, TuneIn and more.
            </h3>
            <h3 class="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
              <span class="relative cursor-default">Contact Us</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full  w-full flex-col bg-charly px-6 py-14 pb-20 pr-12 backdrop-blur-sm">
            <h2 className="mb-6 text-left text-4xl font-semibold tracking-widest text-white">
              Web & App Development
            </h2>
            <h3 className="mb-10 text-left text-lg leading-[2.1rem] text-white ">
              Bring us your ideas and let our expert team craft an amazing web
              site & app for you.
            </h3>
            <h3 class="font-regular relative mb-4 ml-auto  break-normal text-right text-xl text-white opacity-90 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-bravo before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100 sm:w-auto">
              <span class="relative cursor-default">Contact Us</span>
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// bg - [url('/imgs/mobileHeader3.jpg')];
