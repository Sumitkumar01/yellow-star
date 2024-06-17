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

function Product() {
  return (
    <section>
      <div className='max_width'>
        <h2 className='text-4xl font-bold text-yellow-500 mb-4 text-center'>Products</h2>
        <br />
        <div className='product_container'>
          {/* <Swiper
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

          </Swiper> */}
          <div className='product_card grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
            {cardData.map((item) => {
              return (
                <div className='card' key={item.id}>
                  <Card image={item.image} name={item.name}title={item.name}/>
                </div>

              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product