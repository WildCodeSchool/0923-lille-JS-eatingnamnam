// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperRecipeCard from "../SwiperRecipeCard/SwiperRecipeCard";

// Import Swiper styles
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "./Swipper.scss";

export default function Swipper() {
  return (
    <Swiper
      slidesPerView={1.25}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <SwiperRecipeCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperRecipeCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperRecipeCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperRecipeCard />
      </SwiperSlide>
    </Swiper>
  );
}
