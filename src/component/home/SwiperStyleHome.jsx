import React from "react";

import "swiper/css/bundle";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Header3 from "./Header3";

const SwiperStyleHome = (props) => {
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
      {props.data && props.data.length
        ? props.data.map((it, i) => {
            return (
              <SwiperSlide key={`slide-${i}`}>
                <Header3 item={it} />
              </SwiperSlide>
            );
          })
        : null}
    </Swiper>
  );
};

export default SwiperStyleHome;
