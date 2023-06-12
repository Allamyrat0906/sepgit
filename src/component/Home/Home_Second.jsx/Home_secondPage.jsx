import { Box, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import theme, { Colors } from "../../../styles/theme";
import {
  AppButtonStyle,
  BillboardButton,
  HomeSecondContainer,
  HomeSecondContent,
  HomeSecondDescription,
  HomeSecondHeadText,
  HomeSecondLeftimg,
  HomeSecondLetQuality,
  HomeSecondLogoimg1,
  HomeSecondLogoimg2,
  HomeSecondMaskimg,
  HomeSecondRightimg,
  LogoStyle,
  LogoStyleimg,
  StoriesButton,
} from "../../../styles/homesecond";
import Group10 from "../../../icon/Group10";

const styleTop = {
  paddingTop: {
    lg: "0",
    md: "80px",
    sm: "70px",
    xs: "70px",
  },
};
const Home_secondPage = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const matches1 = useMediaQuery(theme.breakpoints.only("md"));
  return (
    <Stack sx={{ ...styleTop }}>
      <HomeSecondContainer>
        <HomeSecondContent>
          <HomeSecondLetQuality>Let equality</HomeSecondLetQuality>
          <HomeSecondHeadText>
            <Box>
              bloom
              <Group10 />
            </Box>
          </HomeSecondHeadText>
          <HomeSecondDescription>
            To close the gender gap completely, Woman must try to do things that
            as men have tried. When they fail, their failure must be but a
            challenge to others.
          </HomeSecondDescription>
          {matches ? (
            <>
              <LogoStyle direction={"row"} spacing={3}>
                <HomeSecondLogoimg1 src="/images/Group_12.svg" alt="Group" />
                <HomeSecondLogoimg2 src="/images/idea.svg" alt="idea" />
              </LogoStyle>
              <AppButtonStyle
                direction={matches ? "column" : "row"}
                spacing={matches ? 1 : 3}
              >
                <StoriesButton variant="contained">Stories</StoriesButton>
                <BillboardButton variant="contained">Billboard</BillboardButton>
              </AppButtonStyle>
            </>
          ) : (
            <>
              <AppButtonStyle
                direction={matches ? "column" : "row"}
                spacing={matches ? 1 : 3}
              >
                <StoriesButton variant="contained">Stories</StoriesButton>
                <BillboardButton variant="contained">Billboard</BillboardButton>
                <Stack direction={"row"} style={{ bottom: 0 }}>
                  <HomeSecondLeftimg src="images/Layer6.svg" alt="img" />
                  <HomeSecondRightimg src="images/Layer7.svg" alt="img" />
                </Stack>
              </AppButtonStyle>
              <LogoStyle direction={"row"} spacing={8}>
                <HomeSecondLogoimg1 src="/images/Group_12.svg" alt="Group" />
                <HomeSecondLogoimg2 src="/images/idea.svg" alt="idea" />{" "}
              </LogoStyle>
            </>
          )}
        </HomeSecondContent>
        <HomeSecondMaskimg
          style={{ bottom: 0 }}
          src="/images/Mask.svg"
          alt="Mask"
        />
      </HomeSecondContainer>
    </Stack>
  );
};

export default Home_secondPage;
