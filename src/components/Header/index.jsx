import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Header() {
  return (
    <header>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <h1>
              Food and more<span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <h1>
              Special Dish<span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <h1>
              Hygienic Food<span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Header;
