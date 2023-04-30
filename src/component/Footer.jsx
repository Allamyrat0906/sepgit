import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Fonts } from "../core/theme";
import Group10 from "./icon/Group10";

const Footer = () => {
  return (
    <Stack
      sx={{
        marginTop: "100px",
        borderRadius: "30px 30px 0px 0px",
        backgroundColor: "secondary.dark",
        height: "213px",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: {
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Stack sx={{ padding: "45px 0px 0px 150px" }}>
            <Typography
              sx={{
                fontSize: "2.8rem",
                fontFamily: Fonts.PHILOSOPHER,
              }}
            >
              Let equality
            </Typography>

            <Box sx={{ paddingLeft: "100px" }}>
              <img
                style={{ width: "50%" }}
                src="/images/Group10.svg "
                alt="group10"
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              <Stack spacing={2} sx={{ padding: "80px 10px 10px 10px" }}>
                <Box display={"flex"}>
                  <img src="/images/message.svg" alt="message" />
                  <Typography
                    sx={{
                      fontFamily: Fonts.PHILOSOPHER,
                      paddingLeft: "10px",
                    }}
                  >
                    sepgit@info.com
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <img src="/images/message.svg" alt="message" />
                  <Typography
                    sx={{ fontFamily: Fonts.PHILOSOPHER, paddingLeft: "10px" }}
                  >
                    sanly.bilim@mail.com
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={2} sx={{ padding: "80px 10px 10px 10px" }}>
                <Box display={"flex"}>
                  <img src="/images/Instagram.svg" alt="instagram" />
                  <Typography
                    sx={{ fontFamily: Fonts.PHILOSOPHER, paddingLeft: "10px" }}
                  >
                    @sepgit_tm
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <img src="/images/Instagram.svg" alt="instagram" />
                  <Typography
                    sx={{ fontFamily: Fonts.PHILOSOPHER, paddingLeft: "10px" }}
                  >
                    @sanly_bilim
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
