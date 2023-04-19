import { Stack, Typography } from "@mui/material";
import React from "react";
import { Fonts } from "../../core/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { homeStyle } from "../Home";
import PartnerSliper from "./PartnerSliper";

const Partnerss = () => {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: "3.5rem",
          fontFamily: Fonts.PHILOSOPHER,
          padding: "0px 0px 0px 40px",
        }}
      >
        Partners
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          fontFamily: Fonts.PHILOSOPHER,
          padding: "0px 0px 0px 40px",
        }}
      >
        This initiative is supported by @idea_ca and <br /> @spotlightinitiative
        Regional Program for Central Asia.
      </Typography>
    </Stack>
  );
};

export default Partnerss;
