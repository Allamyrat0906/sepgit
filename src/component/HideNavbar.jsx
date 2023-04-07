import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SanlyBilimLogo from "./icon/SanlyBilimLogo";
import { Colors, Fonts } from "../core/theme";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const styleButton = {
  color: "grey.400",
  textTransform: "none",
  fontFamily: Fonts.INTER,
  fontWeight: "500",
  fontSize: "19px",
};
export const HideNavbar = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
      spacing={5}
   

    >
      <Button onClick={() => changeRoute("billboard")} sx={{ ...styleButton }}>
        Billboard
      </Button>
      <Button onClick={() => changeRoute("stories_part")}  sx={{ ...styleButton }}>Stories</Button>
      <Button sx={{ ...styleButton }}>Media</Button>
      <Button sx={{ ...styleButton }}>Partners</Button>
      <Button sx={{ ...styleButton }}>Events</Button>
      <Button
        startIcon={<img src="images/search.svg" />}
        sx={{ ...styleButton }}
      >
        Search
      </Button>{" "}
      <Box sx={{display:
      {
        lg:"block",
        md:"block",
        xs:"none",
        xs:"none"
      },
      pt:1}}> 
        <img src="/images/Frame_logo.svg" alt="bootcamp"  width={"85%"}fill={Colors.PRIMARY} />
      </Box>
      <FormControl sx={{
        display: {
          lg:"none"
        }
      }}>
        <Select
          sx={{
            borderRadius: "15px",
            height: "80px",
            width: "90px",
            marginLeft: "10px",
          }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem><img src="images/language.svg" alt="language"/></MenuItem>
          <MenuItem value={"Turkmen"}>
            <img
              src="images/turkmen.png"
              alt="turkmen"
              style={{ width: "50px" }}
            />
          </MenuItem>
          <MenuItem value={"English"}>
            <img src="images/a.png" alt="english" style={{ width: "50px" }} />
          </MenuItem>
          <MenuItem value={"Russian"}>
            <img
              src="images/russia.png"
              alt="russion"
              style={{ width: "50px" }}
            />
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default HideNavbar;
