import React from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/navbar";

import { Box, Stack } from "@mui/material";
import SepgitLogo from "../../icon/SepgitLogo";

const Mobilenavbar = () => {
  return (
    <AppbarContainer>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          border: "1px solid #464646",
          borderRadius: "15px",
          margin: "5px 0px 10px 0px",
        }}
      >
        <AppbarHeader>
          <SepgitLogo />
        </AppbarHeader>

        <Box
          sx={{
            margin: "20px 10px 10px 10px",
          }}
        >
          <img src="images/menu.svg" />
        </Box>
      </Stack>
    </AppbarContainer>
  );
};

export default Mobilenavbar;
