import { Grid, Stack, Tab, Typography } from "@mui/material";
import React from "react";
import { homeStyle } from "../Home";
import { Fonts } from "../../core/theme";
import { AppButton } from "./AppCommponent";

const Events = () => {
  return (
    <Stack sx={{ backgroundColor: "grey.700", ...homeStyle }}>
      <Stack>
        <Typography   sx={{
            fontFamily: Fonts.PHILOSOPHER,
            color: "grey.400",
            fontSize: "2.5rem",
            padding: "100px 300px 0px 143px",
          }}> Как помогут наши встречи?</Typography>
      </Stack>
      <Grid container>
        <Grid item xs={5}>
        <Typography   sx={{
            fontFamily: Fonts.INTER,
            color: "grey.400",
            fontSize: "1.5rem",
            padding: "100px 0px 0px 143px",
          }}> Для чего мы собираемся и делимся <Tab></Tab>своими историями?</Typography>
           <Stack 
                sx={{ paddingTop: "50px" ,paddingLeft:"260px"}}
              >
                <AppButton
                  sx={{ width: "180px", fontSize: "100%" ,  }}
                  variant="contained"
                >
                  Подробнее
                </AppButton>
              </Stack>
              <Stack
                sx={{ justifyContent: "center", marginTop: "40px",  padding: "00px 0px 0px 143px", }}
                spacing={6}
                direction={"row"}
              >
                <img src="/images/Group_12.svg" alt="Group" />
                <img src="/images/idea.svg" alt="idea" />
              </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack>
            <img src="/images/event.svg" alt="Event"/>
          </Stack>

        </Grid>
      </Grid>
    </Stack>
  );
};

export default Events;
