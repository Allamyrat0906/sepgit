import { Box, Stack } from "@mui/material";
import React from "react";
import { useContext } from "react";
import SwiperCore, { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../App";
const SStyle = {
  imageBox: {
    width: "100%",
  },
  imageStyle: {
    height: "120px",
    width: "240px",
  },
};

const PartnerSliper = () => {
  const { mobile } = useContext(AppContext);
  SwiperCore.use([Autoplay]);
  return (
    <Stack
      spacing={4}
      direction={"row"}
      sx={{
        width: "100%",
      }}
    >
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={64}
        slidesPerView={4}
        loopedSlidesLimit={false}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              src="/images/Other.svg"
              alt="Other"
              style={SStyle.imageStyle}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img style={SStyle.imageStyle} src="/images/idea.svg" alt="idea" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              style={SStyle.imageStyle}
              src="/images/BootcampSanly.svg"
              alt="Bootcamp"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              style={SStyle.imageStyle}
              src="/images/LaunchLifeLogo.svg"
              alt="Lounch"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              style={SStyle.imageStyle}
              src="/images/BootcampSanly.svg"
              alt="Other"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              src="/images/Other.svg"
              alt="Other"
              style={SStyle.imageStyle}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img style={SStyle.imageStyle} src="/images/idea.svg" alt="idea" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              style={SStyle.imageStyle}
              src="/images/BootcampSanly.svg"
              alt="Bootcamp"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              style={SStyle.imageStyle}
              src="/images/LaunchLifeLogo.svg"
              alt="Lounch"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={SStyle.imageBox}>
            <img
              style={SStyle.imageStyle}
              src="/images/BootcampSanly.svg"
              alt="Other"
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};

export default PartnerSliper;
