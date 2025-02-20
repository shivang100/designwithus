"use client";
import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function AboutUs() {
  return (
    <div
      id="about"
      className="bg-bc lg:px-10 py-24 md:px-16 px-8 flex flex-col items-center"
    >
      <div className="lg:grid lg:grid-cols-2 md:grid grid-cols-2 lg:gap-2 md:gap-2 ">
        <div className="flex flex-col gap-6 px-10 ">
          <h1 className="lg:text-xl text-center items-center md:text-lg text-sm font-semibold text-[#6ec1e4]">
            About Us
          </h1>
          <p className="lg:text-lg md:text-sm text-xs text-gray-600 leading-relaxed">
            We are not just in the business of metal fabrication; we are in the
            business of turning dreams into tangible, awe-inspiring realities.
            With a passion for precision and an eye for innovation, we stand as
            a beacon of excellence in the realm of metal design.
          </p>
          <p className="lg:text-lg md:text-sm text-xs text-gray-600 leading-relaxed">
            Every piece that leaves our workshop is a testament to our
            unwavering commitment to craftsmanship. We blend traditional
            techniques with cutting-edge technologies to create metal designs
            that transcend boundaries of style and functionality. Whether it’s
            intricate ornaments or sleek modern structures, each project is
            approached with the same level of dedication and attention to
            detail.
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:max-w-3xl md:max-w-2xl max-w-sm text-center">
          <h1 className="text-xl font-semibold text-[#6ec1e4]">Our Designs</h1>
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/design1.png"
                  height={1000}
                  width={1200}
                  alt="logo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/design2.png"
                  height={1000}
                  width={1200}
                  alt="logo"
                />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}
