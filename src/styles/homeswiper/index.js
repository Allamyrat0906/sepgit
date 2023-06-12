import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, Fonts } from "../theme";

export const SwiperContainer = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  width: "100%",
  height: "700px",
  alignItems: "center",
  display: "flex",
  backgroundColor: Colors.page_dark,
  borderRadius: "20px",
  [theme.breakpoints.down("md")]: {
    height: "350px",
  },
  [theme.breakpoints.only("md")]: {
    height: "450px",
  },
}));

export const SwiperContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  height: "100%",
  maxWidth: 500,
  padding: "0px 0px 0px 50px",
  flexDirection: "column",
  [theme.breakpoints.only("md")]: {
    maxWidth: 600,
  },
}));

export const SwiperHeadText = styled(Typography)(({ theme }) => ({
  fontFamily: Fonts.PHILOSOPHER,
  fontSize: "25px",
  display: "flex",
}));
export const SwiperJobText = styled(Typography)(({ theme }) => ({
  fontFamily: Fonts.PHILOSOPHER,
  fontSize: "44px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "35px",
  },
}));
export const SwiperSubText = styled(Typography)(({ theme }) => ({
  fontFamily: Fonts.INTER,
  fontSize: "25px",
  color: Colors.primary,
}));

export const Swiperimg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "50%",
}));

export const Mask2 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
}));
export const Avatar = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  
}));
export const ImgBorderAvatar = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  overflow: "hidden",
  borderRadius: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "70px",
    height: "70px",
    borderRadius: "100%",
  },
}));
export const NameText = styled(Stack)(() => ({
  padding: "20px",
}));

export const ReadmeButton = styled(Button)(({ theme }) => ({
  width: "30%",
  borderRadius: "10px",
  fontFamily: Fonts.INTER,
  padding: "10px",
  position: "static",
  [theme.breakpoints.only("md")]: {
    width: "50%",
    height: "70px",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
}));
