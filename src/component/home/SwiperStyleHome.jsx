import React from "react";

import "swiper/css/bundle";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Header3 from "./Header3";

const SwiperStyleHome = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Header3 />
      </SwiperSlide>
      <SwiperSlide>
        <Header3 />
      </SwiperSlide>
      <SwiperSlide>
        <Header3 />
      </SwiperSlide>
      <SwiperSlide>
        <Header3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperStyleHome;
