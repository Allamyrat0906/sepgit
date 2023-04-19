import React from "react";

import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Fonts } from "../../core/theme";

const MediaHome = () => {
  return (
    <Stack sx={{}}>
      <Typography
        sx={{
          fontSize: "3.5rem",
          fontFamily: Fonts.PHILOSOPHER,
          padding: "0px 0px 0px 40px",
        }}
      >
        Media
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Card
            direction={"row"}
            sx={{
              background: "black",
              border: "1px solid #464646",
              borderRadius: "20px",
              width: "100%",
              height: "250px",
            }}
          >
            <Stack direction={"row"}>
              <Typography
                sx={{
                  padding: "30px 10px 10px 20px",
                  fontSize: "2rem",
                  fontFamily: Fonts.PHILOSOPHER,
                }}
              >
                Videos
              </Typography>

              <Box sx={{ padding: "40px 10px 10px 10px" }}>
                <img
                  width={"100%"}
                  src="/images/Stories_continue_buttom.svg"
                  alt="Button"
                />
              </Box>
              <Box sx={{ padding: "20px 0px 0px 0px" }}>
                <img src="/images/Media_videos.svg" alt="Video" />
              </Box>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            direction={"row"}
            sx={{
              background: "black",
              border: "1px solid #464646",
              borderRadius: "20px",
              width: "100%",
              height: "250px",
            }}
          >
            <Stack direction={"row"}>
              <Typography
                sx={{
                  padding: "30px 10px 10px 20px",
                  fontSize: "2rem",
                  fontFamily: Fonts.PHILOSOPHER,
                }}
              >
                Podcasts
              </Typography>

              <Box sx={{ padding: "38px 10px 10px 10px" }}>
                <img
                  width={"70%"}
                  src="/images/Media_Button_2.svg"
                  alt="Button"
                />
              </Box>
              <Box sx={{ padding: "30px 0px 0px 45px" }}>
                <img src="/images/Media_Podcast.svg" alt="Podcast" />
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default MediaHome;
