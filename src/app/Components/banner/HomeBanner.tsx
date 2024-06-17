"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

function HomeBanner() {
  const img: [string, string, string, string] = [
    "/images/banner.webp",
    "/images/banner-2.webp",
    "/images/banner-03.webp",
    "/images/banner-04.webp",
  ];
  return (
    <div className="max-w-[1900px] mx-auto">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        loop={true}
        slidesPerView={1}
        speed={900}
        autoplay={{
          delay: 4000,
        }}
        className="mySwiper"
      >
        {img.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full">
                <Image
                  src={item}
                  width={1900}
                  height={700}
                  alt="alt"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HomeBanner;
