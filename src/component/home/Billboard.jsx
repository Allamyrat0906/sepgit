import { Box, Button, Grid, Stack, Tab, Typography } from "@mui/material";
import React, { useContext } from "react";
import { homeStyle } from "../Home";
import { AppContext } from "../../App";
import { Fonts } from "../../core/theme";
import Group10 from "../icon/Group10";
import { AppButton } from "./AppCommponent";

const Billboard = () => {
  const { mobile } = useContext(AppContext);
  return (
    <Stack sx={{ backgroundColor: "grey.700", ...homeStyle }}>
      <Grid container>
        <Grid item xs={5}>
          <Stack
            alignItems={mobile ? "flex-start" : "center"}
            sx={{ width: "100%" }}
          >
            <Stack
              spacing={5}
              sx={{ width: "100%", paddingTop: "123px", paddingLeftL: "100px" }}
            >
              <Typography
                sx={{
                  fontFamily: Fonts.PHILOSOPHER,
                  color: "grey.400",
                  fontSize: "3.5rem",
                  paddingLeft: "70px",
                }}
              >
                Новое <br />
                <div style={{ paddingLeft: "50px" }}>
                  мероприятие <Group10 />
                </div>
              </Typography>
              <Typography
                sx={{
                  fontFamily: Fonts.INTER,
                  color: "grey.400",
                  fontSize: "1.5rem",
                  width: "60%",
                  paddingLeft: "70px",
                }}
              >
                Что такое soft skills, зачем они нужны и как их развивать?
              </Typography>
              <Stack
                sx={{ paddingLeft: "250px", width: "100%", paddingTop: "10px" }}
              >
                <AppButton
                  sx={{ width: "180px", fontSize: "100%" }}
                  variant="contained"
                >
                  Подробнее
                </AppButton>
              </Stack>
              <Stack
                spacing={5}
                sx={{ paddingLeft: "120px", paddingTop: "50px" }}
                direction={"row"}
              >
                <img src="/images/Group_12.svg" alt="Group" />
                <img src="/images/idea.svg" alt="idea" />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack
            sx={{
              paddingTop: "250px",
              paddingRight: "30px",
              position: "static",
            }}
          >
            <img
              src={"/images/WomanPowerCrowded.svg"}
              alt={"women"}
              style={{ width: "100%" }}
            />
          </Stack>{" "}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Billboard;
