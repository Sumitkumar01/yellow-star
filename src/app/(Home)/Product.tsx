"use client"

import React from 'react'
import { cardData } from '../data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Card } from '../Components';
import LinkButton from '../Components/Linkbutton';

function Product() {
  return (
    <section className='bg-slate-200 py-5'>
      <div className='max_width '>
        <h2 className='text-4xl font-bold text-red-500 mb-4 text-center'>Products</h2>
        <br />
        <div className='product_container'>
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
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }}
            className="mySwiper"
          >
            {cardData.filter((item) => item.showTOAllProduct === true).map((item) => (
              <SwiperSlide key={item.id}>
                <Card image={item.image} name={item.name} title={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='py-6 text-center w-full'>
            <LinkButton className='px-4 py-2 border text-white capitalize active:scale-90 border-red-600  bg-red-500 hover:text-red-500 hover:bg-red-50 font-bold rounded-md' href='/products'>
              View all products
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product