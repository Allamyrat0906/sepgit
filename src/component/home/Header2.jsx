import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { homeStyle } from "../Home";
import { Fonts } from "../../core/theme";
import Group10 from "../icon/Group10";
import { AppButton } from "../AppCommponent";
import { AppContext } from "../../App";
import { useContext } from "react";

const Header2 = () => {
  const { mobile } = useContext(AppContext);
  return (
    <div>
      <Stack
        alignItems={mobile ? "flex-start" : "center"}
        sx={{ ...homeStyle, backgroundColor: "#1E1E1E" }}
      >
        <Stack sx={{ padding: "30px 0px 0px 328px" }}>
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
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <img style={{ width: "95%" }} src="images/Layer6.svg" alt="Layer" />
          </Box>

          <Box sx={{ marginTop: "30px", justifyContent: "space-between" }}>
            <img src="/images/Group_12.svg" alt="Group" />
            <img src="/images/idea.svg" alt="idea" />
          </Box>
          <Box>
            <img
              style={{ borderRadius: "15px", width: "100%" }}
              src="images/Layer7.svg"
              alt="Layer"
            />
          </Box>
        </Stack>
        <Box sx={{ zIndex: 1 }} bottom="0px">
          <img style={{ width: "100%" }} src="/images/Mask.svg" alt="Mask" />
        </Box>
      </Stack>
    </div>
  );
};

export default Header2;
