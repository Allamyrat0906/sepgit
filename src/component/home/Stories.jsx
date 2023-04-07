import { Stack, Grid, Typography, Tab } from "@mui/material";
import React from "react";
import { homeStyle } from "../Home";
import { Fonts } from "../../core/theme";
import { AppButton } from "./AppCommponent";

const Stories = () => {
  return (
    <Stack sx={{ backgroundColor: "grey.700", ...homeStyle }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Stack sx={{ width: "100%", alignItems: "end" }}>
            <Stack sx={{ width: "85%", paddingTop: "85px" }}>
              <img src="/images/women_stories.svg" alt="women" />
              <Stack
                sx={{ justifyContent: "center", marginTop: "-40px" }}
                spacing={6}
                direction={"row"}
              >
                <img src="/images/Group_12.svg" alt="Group" />
                <img src="/images/idea.svg" alt="idea" />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={5} alignItems={"start"}>
            <Typography
              sx={{
                fontFamily: Fonts.PHILOSOPHER,
                color: "grey.400",
                fontSize: "2.5rem",
                paddingTop: "170px",
              }}
            >
              Как помогут наши встречи?
            </Typography>
            <Typography
              sx={{
                fontFamily: Fonts.INTER,
                color: "grey.400",
                fontSize: "1.5rem",
                width: "80%",
              }}
            >
              Для чего мы собираемся и делимся своими историями?
            </Typography>
            <Stack sx={{ width: "100%", paddingTop: "20px" }}>
              <AppButton
                sx={{ width: "180px", fontSize: "100%", borderRadius: "10px" }}
                variant="contained"
              >
                Читать далее
              </AppButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Stories;
