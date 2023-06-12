import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Avatar,
  ImgBorderAvatar,
  Mask2,
  NameText,
  ReadmeButton,
  SwiperContainer,
  SwiperContent,
  SwiperHeadText,
  SwiperJobText,
  SwiperSubText,
  Swiperimg,
} from "../../../styles/homeswiper";
import { AppButton } from "../../../styles/AppButton";

const HomeSwiper = () => {
  return (
    <Stack>
      <SwiperContainer>
        <Mask2 src="/images/Mask2.svg" alt="Mask" />
        <SwiperContent>
          <Stack direction={"row"}>
            <ImgBorderAvatar>
              <Avatar src="/images/Avatar.svg" alt="avatar" />
            </ImgBorderAvatar>
            <NameText>
              <SwiperHeadText>Annayev Allamyrat</SwiperHeadText>
              <SwiperSubText>salam</SwiperSubText>
            </NameText>
          </Stack>
          <SwiperJobText>From economics student, to art director</SwiperJobText>
          <ReadmeButton variant="contained">Read article</ReadmeButton>
        </SwiperContent>
        <Swiperimg src="/images/Header3.svg" alt="Header" />
      </SwiperContainer>
    </Stack>
  );
};

export default HomeSwiper;
