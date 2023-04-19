import React, { useContext } from "react";
import { homeStyle } from "../Home";
import { AppContext } from "../../App";
import { Grid, Stack, Typography, Box } from "@mui/material";
import { Fonts } from "../../core/theme";
import Group10 from "../icon/Group10";
import { AppButton } from "../AppCommponent";
import { useNavigate } from "react-router-dom";

const Billboard_home = () => {
  const navigate = useNavigate();
  function changeRoute(path) {
    navigate(path);
    if (props.close) {
      props.close();
    }
  }
  const { mobile } = useContext(AppContext);
  return (
    <Stack
      sx={{
        backgroundColor: "grey.700",
        ...homeStyle,
        display: {
          xs: "none",
          md: "none",
          lg: "block",
        },
      }}
    >
      <Grid container>
        <Grid item xs={5}>
          <Stack
            alignItems={mobile ? "flex-start" : "center"}
            sx={{ width: "100%" }}
          >
            <Stack spacing={5} sx={{ width: "100%", paddingTop: "40px" }}>
              <Typography
                sx={{
                  fontFamily: Fonts.PHILOSOPHER,
                  color: "grey.400",
                  fontSize: "3.6rem",
                  paddingLeft: "40px",
                }}
              >
                Новое <br />
                <div
                  style={{
                    paddingLeft: "50px",
                    fontWeight: "bold",
                    marginTop: "-40px",
                  }}
                >
                  мероприятие <Group10 />
                </div>
              </Typography>
              <Typography
                sx={{
                  fontFamily: Fonts.INTER,
                  color: "grey.400",
                  fontSize: "1.8rem",
                  width: "80%",
                  fontWeight: "bold",
                  paddingLeft: "40px",
                }}
              >
                Что такое soft skills, зачем они нужны и как их развивать?
              </Typography>
              <Stack sx={{ paddingLeft: "300px", width: "100%" }}>
                <AppButton
                  sx={{ width: "180px" }}
                  variant="contained"
                  onClick={() => changeRoute("/billboard")}
                >
                  Подробнее
                </AppButton>
              </Stack>
              <img
                src={"/images/WomanPowerCrowded.svg"}
                alt={"women"}
                style={{ width: "90%" }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack
            sx={{
              paddingTop: "40px",
            }}
          >
            <img
              src={"/images/Group_123.svg"}
              alt={"women"}
              style={{ width: "100%" }}
            />
          </Stack>
        </Grid>
      </Grid>
      {/* <Box>
        <img style={{ width: "100%" }} src="/images/Mask.svg" alt="Mask" />
      </Box> */}
    </Stack>
  );
};

export default Billboard_home;
