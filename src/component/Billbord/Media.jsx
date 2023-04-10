import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { homeStyle } from "../Home";
import { Fonts } from "../../core/theme";
import { AppButton } from "../AppCommponent";

const Media = () => {
  return (
    <Stack sx={{ backgroundColor: "grey.700", ...homeStyle }}>
      <Stack>
        <Typography
          sx={{
            fontFamily: Fonts.PHILOSOPHER,
            color: "grey.400",
            fontSize: "2.5rem",
            padding: "100px 300px 0px 143px",
          }}
        >
          Как поможет программирование повысить свою значимость в обществе?
        </Typography>
      </Stack>
      <Grid container>
        <Grid item xs={8}>
          <Stack spacing={2} sx={{ padding: "100px 350px 0px 143px" }}>
            <Typography
              sx={{
                fontFamily: Fonts.INTER,
                color: "grey.400",
                fontSize: "1.5rem",
              }}
            >
              Для чего мы собираемся и делимся своими историями?
            </Typography>
            <Stack sx={{ width: "100%", paddingTop: "20px" }}>
              <AppButton
                sx={{ width: "180px", fontSize: "100%", borderRadius: "10px" }}
                variant="contained"
              >
                Подробнее
              </AppButton>
            </Stack>
            <Stack paddingTop={"90px"} spacing={7} direction={"row"}>
              <img src="/images/Group_12.svg" alt="Group" />
              <img src="/images/idea.svg" alt="idea" />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack  justifyContent={"start"} width={"80%"}>
            <img src="/images/image_1.svg" alt="language"/>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Media;
