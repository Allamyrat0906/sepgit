import React from "react";
import HomeBillbord from "./Home_billbord/HomeBillbord";
import { Stack } from "@mui/material";
import Home_secondPage from "./Home_Second.jsx/Home_secondPage";

import SwiperHome from "./Home_Swiper/Swiper";

const Home = () => {
  return (
    <Stack sx={{}} spacing={3}>
      <HomeBillbord />
      <Home_secondPage />
      <SwiperHome />
    </Stack>
  );
};

export default Home;
