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
  // const theme2 = useTheme();
  // const isDesktop = useMediaQuery(theme2.breakpoints.up("lg"));
  // const isTablet = useMediaQuery(theme2.breakpoints.only("md"));
  // const isMobile = useMediaQuery(theme2.breakpoints.down("md"));

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
            paddingLeft: {
              sm: "10%",
              xs: "10%",
              md: "20%",
              lg: "25%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: "76px",
                md: "70px",
                sm: "70px",
                xs: "70px",
              },
              fontFamily: Fonts.PHILOSOPHER,
              fontWeight: "10px",
            }}
          >
            Let equality
          </Typography>
          <Typography
            sx={{
              fontFamily: Fonts.PHILOSOPHER,
              fontWeight: "bold",
              paddingLeft: {
                sm: "0%",
                xs: "0%",
                md: "20%",
                lg: "25%",
              },

              marginTop: "-20px ",
              fontSize: {
                lg: "100%",
                md: "90%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            bloom <Group10 />
          </Typography>
          <Typography
            sx={{
              paddingLeft: {
                sm: "0%",
                xs: "0%",
                md: "20%",
                lg: "25%",
              },
              fontSize: {
                lg: "100%",
                md: "100%",
                sm: "30px",
                xs: "20px",
              },
              marginTop: "-10px ",
              fontFamily: Fonts.INTER,
              color: "#747474  ",
              width: {
                lg: "42%",
                md: "48%",
                sm: "75%",
                xs: "100%",
              },
            }}
          >
            To close the gender gap completely, Woman must try to do things that
            as men have tried. When they fail, their failure must be but a
            challenge to others.
          </Typography>
          <Stack
            direction={{
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            }}
            spacing={5}
            sx={{
              paddingLeft: {
                sm: "0%",
                xs: "0%",
                md: "20%",
                lg: "25%",
              },
              marginTop: {
                lg: "10%",
                md: "10%",
                sm: "35%",
                xs: "50%",
              },
            }}
          >
            <AppButton
              sx={{
                width: {
                  lg: "18%",
                  md: "18%",
                  sm: "90%",
                  xs: "90%",
                },
              }}
              variant="contained"
            >
              Stories
            </AppButton>
            <AppButton
              sx={{
                width: {
                  lg: "18%",
                  md: "18%",
                  sm: "90%",
                  xs: "90%",
                },
                background: "primary.buttonStyle",
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

            <Box
              sx={{
                marginTop: "100px",
                marginBottom: {
                  sm: "250px",
                  xs: "300px",
                },
                justifyContent: "space-between",
              }}
            >
              <img src="/images/Group_12.svg" alt="Group" />
              <img src="/images/idea.svg" alt="idea" />
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                },
              }}
            >
              <img
                style={{
                  borderRadius: "20px",
                  width: "485px",
                }}
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
