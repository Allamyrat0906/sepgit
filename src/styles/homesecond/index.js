import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, Fonts } from "../theme";

export const HomeSecondContainer = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  width: "100%",
  height: "750px",
  alignItems: "center",
  display: "flex",
  backgroundColor: Colors.page_dark,
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    height: "600px",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const HomeSecondContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  height: "100%",
  padding: "40px 0px 0px 0px",

  [theme.breakpoints.down("md")]: {
    padding: "25px 10px 10px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 600,
    padding: "25px 10px 10px 10px",
  },
}));

export const HomeSecondLetQuality = styled(Typography)(({ theme }) => ({
  fontSize: "55px",
  fontFamily: Fonts.PHILOSOPHER,
  paddingLeft: "23%",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
    paddingLeft: "0",
  },
}));
export const HomeSecondHeadText = styled(Typography)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  fontSize: "100px",
  marginTop: "-35px",
  fontFamily: Fonts.PHILOSOPHER,
  [theme.breakpoints.down("md")]: {
    fontSize: "62px",
    justifyContent: "start",
  },
}));

export const HomeSecondDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  fontFamily: Fonts.INTER,
  color: "#747474",
  fontSize: "1em",
  justifyContent: "center",
  maxWidth: "35%",
  paddingLeft: "38%",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
    justifyContent: "start",
    paddingLeft: "0px",
    fontSize: "1.2em",
    maxWidth: "100%",
  },
  [theme.breakpoints.only("md")]: {
    maxWidth: "50%",
  },
}));
export const AppButtonStyle = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  marginTop: "15px",
  marginLeft: "90px",
  [theme.breakpoints.down("md")]: {
    alignItems: "end",
    marginTop: "20%",
    marginLeft: "0",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "end",
    marginLeft: "0",
    marginTop: "20%",
  },
}));

export const StoriesButton = styled(Button)(({ theme }) => ({
  width: "15%",
  borderRadius: "10px",
  fontFamily: Fonts.INTER,
  padding: "10px",
  // marginBottom: "8px",
  letterSpacing: "2px",
  fontSize: "16px",
  position: "static",
  fontWeight: "100",
  // paddingVertical: "10px",
  // justifyContent: "center",
  // alignSelf: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: "5px",
  },
}));
export const BillboardButton = styled(Button)(({ theme }) => ({
  width: "15%",
  backgroundColor: "#313131",
  borderRadius: "10px",
  fontFamily: Fonts.INTER,
  padding: "10px",
  position: "static",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: "5px",
  },
}));

/// 2 logo responsive bottom
export const LogoStyle = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  marginTop: "30px",
  marginLeft: "70px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    marginLeft: "0px",
  },
  [theme.breakpoints.only("md")]: {
    justifyContent: "start",
    alignItems: "center",
    marginTop: "100px",
    marginLeft: "0px",
    paddingLeft: "100px",
  },
}));

export const HomeSecondLogoimg1 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "170px",
  height: "80px",
  [theme.breakpoints.down("md")]: {
    width: "170px",
    height: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "80px",
  },
}));
export const HomeSecondLogoimg2 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100px",
  height: "70px",
  [theme.breakpoints.down("md")]: {
    width: "130px",
    height: "70px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "110px",
    height: "65px",
  },
}));
export const HomeSecondLeftimg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "510px",
  left: 0,
  display: "block",
  position: "absolute",
  paddingLeft: "2%",
  paddingTop: "2.2%",

  [theme.breakpoints.between("xs", "lg")]: {
    display: "none",
  },
}));
export const HomeSecondRightimg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "475px",
  paddingRight: "2%",
  position: "absolute",
  right: 0,
  paddingTop: "2.2%",
  display: "block",
  [theme.breakpoints.between("xs", "lg")]: {
    display: "block",
    paddingTop: "3%",
  },
}));
export const HomeSecondMaskimg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",

  [theme.breakpoints.down("md")]: {
    width: "130px",
    height: "70px",
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "110px",
    height: "65px",
    display: "none",
  },
}));

export const LogoStyleimg = styled(Box)(({}) => ({
  justifyContent: "space-between",
  alignItems: "space-between",
}));
