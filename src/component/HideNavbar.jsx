import { Box, Button, MenuItem, Select, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SanlyBilimLogo from "./icon/SanlyBilimLogo";
import { Colors, Fonts } from "../core/theme";
const styleButton = {
  color: "grey.400",
  textTransform: "none",
  fontFamily: Fonts.INTER,
  fontWeight: "500",
  fontSize: "19px",
};
export const HideNavbar = (props) => {
  const mobile = props.mobile;
  const navigate = useNavigate();
  function changeRoute(path) {
    navigate(path);
    if (props.close) {
      props.close();
    }
  }
  return (
    <Stack
      direction={mobile ? "column" : "row"}
      alignItems={"center"}
      spacing={6}
    >
      <Button onClick={() => changeRoute("billboard")} sx={{ ...styleButton }}>
        Billboard
      </Button>
      <Button sx={{ ...styleButton }}>Stories</Button>
      <Button sx={{ ...styleButton }}>Media</Button>
      <Button sx={{ ...styleButton }}>Partners</Button>
      <Button sx={{ ...styleButton }}>Events</Button>
      <Button
        startIcon={<img src="images/search.svg" />}
        sx={{ ...styleButton }}
      >
        Search
      </Button>{" "}
      <Box sx={{ pt: 1 }}>
        <SanlyBilimLogo fill={Colors.PRIMARY} />
      </Box>
      <Stack
        sx={{
          width: "7%",
          height: "135%",
          border: "1px solid #464646",
          borderRadius: "15px",
          alignItems:"center",justifyContent:"center"
        }}
      >
        <Box width={"120%"} sx={{pl:2,pt:-9}}>
   
          <Select label="Language" sx={{borderRadius:"15px", width:"85%",height:"122%" , marginLeft:"-1px"}}>
            <MenuItem value={"Turkmen"}>
              {<img src="images/turkmen.png" width={"100%"} />}
            </MenuItem>
            <MenuItem value={"English"}>
              {<img src="images/a.png" width={"100%"} />}
            </MenuItem>
            <MenuItem value={"Russian"}>
              {<img src="images/russia.png" width={"100%"} />}
            </MenuItem>
          </Select>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HideNavbar;
