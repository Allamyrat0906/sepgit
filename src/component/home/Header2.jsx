import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { homeStyle } from "../Home";
import { Fonts } from "../../core/theme";
import Group10 from "../icon/Group10";
import { AppButton } from "../AppCommponent";

const Header2 = () => {
  return (
    <Stack sx={{ ...homeStyle, backgroundColor: "#1E1E1E" }}>
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
        <img
          style={{ width: "40%", zIndex: 5 }}
          src="images/Layer6.svg"
          alt="Layer"
        />
        <Box sx={{ marginLeft: "-60px", marginTop: "30px" }}>
          <img src="/images/Group_12.svg" alt="Group" />
          <img
            style={{ paddingLeft: "25px" }}
            src="/images/idea.svg"
            alt="idea"
          />
        </Box>
        <img
          style={{ width: "30%", borderRadius: "20px" }}
          src="images/Layer7.svg"
          alt="Layer"
        />
      </Stack>
    </Stack>
  );
};

export default Header2;
