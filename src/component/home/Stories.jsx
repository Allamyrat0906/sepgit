import { Stack, Grid, Typography, Tab } from "@mui/material";
import React from "react";
import { homeStyle } from "../Home";
import { Fonts } from "../../core/theme";
import { SpaceBar } from "@mui/icons-material";

const Stories = () => {
  return (
    <Stack sx={{ backgroundColor: "grey.700", ...homeStyle }}>
      <Grid container>
        <Grid item xs={8}>
          <Stack sx={{ width: "100%", alignItems: "end" }}>
            <Stack sx={{ width: "85%", paddingTop: "85px" }}>
              <img src="/images/women_stories.svg" alt="women" />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack alignItems={"start"}>
            <Typography  sx={{
                  fontFamily: Fonts.PHILOSOPHER,
                  color: "grey.400",
                  fontSize: "2.5rem",
                  paddingTop:"123px"
                }}>
              Как помогут наши 
              встречи?</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Stories;
