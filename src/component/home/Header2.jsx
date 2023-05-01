import Group10 from "../icon/Group10";
import React from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Fonts } from "../../core/theme";
import { AppButton } from "../AppCommponent";
import { homeStyle } from "../Home";
import { useState } from "react";
import { AxiosInstance } from "../../Axios/AxiosInstance.mjs";
import { useEffect } from "react";
import Loading from "../Loading";

const Header2 = () => {
  const { mobile } = useContext(AppContext);
  //const theme2 = useTheme();
  // const isDesktop = useMediaQuery(theme2.breakpoints.up("lg"));
  // const isTablet = useMediaQuery(theme2.breakpoints.only("md"));
  // const isMobile = useMediaQuery(theme2.breakpoints.down("md"));

  return (
    <Stack
      alignItems={mobile ? "center" : "center"}
      justifyContent={"space-between"}
      sx={{
        borderRadius: "30px",
        backgroundColor: "#1E1E1E",
        height: "800px",
        width: "100%",
      }}
    >
      <Stack
        alignItems={mobile ? "flex-center" : "center"}
        justifyContent={"center"}
        paddingTop={mobile ? "60px" : "10px"}
        padding={mobile ? "20px" : "0px"}
      >
        <Typography
          fontSize={mobile ? "40px" : "65px"}
          paddingRight={mobile ? "0px" : "300px"}
          sx={{
            fontFamily: Fonts.PHILOSOPHER,
            fontWeight: "10px",
          }}
        >
          Let equality
        </Typography>
        <Typography
          fontSize={mobile ? "55px" : "100px"}
          marginTop={mobile ? "-15px" : "-30px"}
          sx={{
            fontFamily: Fonts.PHILOSOPHER,
            fontWeight: "bold",
            display: "flex",
          }}
        >
          bloom
          <Box>
            <Group10 />
          </Box>
        </Typography>
        <Typography
          paddingLeft={mobile ? "2%" : "10%"}
          width={mobile ? "80% " : "40%"}
          sx={{
            fontFamily: Fonts.INTER,
            color: "#747474  ",
          }}
        >
          To close the gender gap completely, Woman must try to do things that
          as men have tried. When they fail, their failure must be but a
          challenge to others.
        </Typography>
        <Stack
          direction={mobile ? "column" : "row"}
          spacing={3}
          marginTop={mobile ? "100%" : "5%"}
          width={mobile ? "100%" : "30%"}
        >
          <AppButton
            sx={{
              width: "100%",
            }}
            variant="contained"
          >
            Stories
          </AppButton>
          <AppButton
            sx={{
              width: "100%",
              backgroundColor: "primary.buttonStyle",
            }}
            variant="contained"
          >
            Billboard
          </AppButton>
        </Stack>
      </Stack>

      <Stack
        style={{ width: "100%", bottom: 0 }}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <Box sx={{}}>
          <img style={{ width: "95%" }} src="/images/Mask.svg" alt="Mask" />
        </Box>
        <Stack
          sx={{ position: "absolute" }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box sx={{}} display={mobile ? "none" : "block"}>
            <img
              style={{ width: "510px" }}
              src="images/Layer6.svg"
              alt="Layer"
            />
          </Box>

          <Box
            marginBottom={mobile ? "100%" : ""}
            marginTop={mobile ? "" : "10%"}
          >
            <img src="/images/Group_12.svg" alt="Group" />
            <img src="/images/idea.svg" alt="idea" />
          </Box>
          <Box display={mobile ? "none" : "block"}>
            <img
              style={{
                borderRadius: "20px",
                width: "475px",
                bottom: 0,
                right: 0,
              }}
              src="images/Layer7.svg"
              alt="Layer"
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header2;
