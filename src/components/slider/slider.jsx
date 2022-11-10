import React from "react";
import classes from "./slider.module.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/thumbs/thumbs.min.css";

const slider = () => {
  return (
    <div className={classes.sContainer}>
      <Swiper
        // install Swiper modules
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default slider;
