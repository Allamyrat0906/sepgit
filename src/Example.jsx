import { Box, Stack } from "@mui/material";
import React from "react";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnerSliper = () => {
  return (
    <Stack spacing={4} direction={"row"}>
      <Swiper modules={[A11y]} spaceBetween={50} slidesPerView={4} loop>
        <SwiperSlide>
          <Box sx={{ margin: "0px 0px 0px -70px" }}>
            <img src="/images/Other.svg" alt="Other" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ margin: "0px 0px 0px -70px" }}>
            <img style={{ width: "35%" }} src="/images/idea.svg" alt="idea" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ margin: "0px 0px 0px -230px" }}>
            <img
              style={{ width: "320px", padding: "30px" }}
              src="/images/BootcampSanly.svg"
              alt="Bootcamp"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ margin: "0px 0px 0px -150px" }}>
            <img
              style={{ width: "45%", padding: "20px" }}
              src="/images/LaunchLifeLogo.svg"
              alt="Lounch"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ margin: "0px 0px 0px -190px" }}>
            <img
              style={{ width: "320px", padding: "30px" }}
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
