import Group10 from "../icon/Group10";
import React from "react";
import {
  Box,
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

const Header2 = () => {
  const { mobile } = useContext(AppContext);
  const theme2 = useTheme();
  const isDesktop = useMediaQuery(theme2.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme2.breakpoints.only("md"));
  const isMobile = useMediaQuery(theme2.breakpoints.down("md"));

  const marginTop = {
    xs: "-50px",
    sm: "-50px",
    md: "-50px",
    lg: "0px",
  };
  return (
    <div>
      <Stack
        alignItems={mobile ? "flex-start" : "center"}
        justifyContent={"space-between"}
        sx={{
          borderRadius: "30px",
          backgroundColor: "#1E1E1E",
          height: "800px",
          marginTop: marginTop,
        }}
      >
        <Stack
          sx={{
            justifyContent: "end",
          }}
        >
          <Typography
            sx={{
              fontSize: "4.0rem",
              fontFamily: Fonts.PHILOSOPHER,
              fontWeight: "10px",
            }}
          >
            Let equality
          </Typography>
          <Typography
            sx={{
              fontSize: "6.5rem",
              fontFamily: Fonts.PHILOSOPHER,
              fontWeight: "bold",
              padding: "0 0px 0px 200px",
              marginTop: "-30px ",
            }}
          >
            bloom <Group10 />
          </Typography>
          <Typography
            width={"42%"}
            sx={{
              padding: "0 0px 0px 200px",
              fontSize: "1.1rem",
              marginTop: "-10px ",
              fontFamily: Fonts.INTER,
              color: "#747474  ",
            }}
          >
            To close the gender gap completely, Woman must try to do things that
            as men have tried. When they fail, their failure must be but a
            challenge to others.
          </Typography>
          <Stack
            direction={"row"}
            spacing={5}
            sx={{ padding: "0 0px 0px 200px", marginTop: "20px" }}
          >
            <AppButton sx={{ width: "120px" }} variant="contained">
              Stories
            </AppButton>
            <AppButton
              sx={{ width: "120px", backgroundColor: "#313131" }}
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
            <img
              style={{ width: "95%", paddingLeft: "30px" }}
              src="/images/Mask.svg"
              alt="Mask"
            />
          </Box>
          <Stack
            sx={{ position: "absolute" }}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Box
              sx={{
                display: {
                  sm: "none",
                  xs: "none",
                  md: "none",
                  lg: "block",
                },
              }}
            >
              <img
                style={{ width: "523px", paddingBottom: "-20px" }}
                src="images/Layer6.svg"
                alt="Layer"
              />
            </Box>

            <Box sx={{ marginTop: "80px", justifyContent: "space-between" }}>
              <img src="/images/Group_12.svg" alt="Group" />
              <img src="/images/idea.svg" alt="idea" />
            </Box>
            <Box
              sx={{
                alignContent: {
                  md: "flex-end",
                },
              }}
            >
              <img
                style={{ borderRadius: "20px", width: "485px" }}
                src="images/Layer7.svg"
                alt="Layer"
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Header2;
