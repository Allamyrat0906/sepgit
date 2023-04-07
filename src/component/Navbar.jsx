import { Box, FormControl, MenuItem, Select, Stack } from "@mui/material";
import React, { useContext } from "react";
import { Colors, Fonts } from "../core/theme";
import Logo from "./icon/Logo";
import { AppContext } from "../App";
import HideNavbar from "./HideNavbar";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const { mobile } = useContext(AppContext);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        padding: "14px 40px 10px 30px",
      }}
    >
      
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          border: "1px solid #464646",
          borderRadius: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        spacing={15}
      >
        <Box alignItems={"center"} onClick={() => navigate("/")}>
          <Logo fill={Colors.PRIMARY} />
        </Box>
        {mobile ? <MobileDrawer /> : <HideNavbar mobile={mobile} />}
      </Stack>
      <Stack>
        <FormControl
          sx={{
            display: {
              xs: "none",
              md: "none",
              lg: "block",
            },
          }}
        >
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
            <MenuItem>
              <img
                src="images/language.svg"
                alt="language"
                style={{ width: "40px" }}
              />
            </MenuItem>
            <MenuItem value={"Turkmen"}>
              <img
                src="images/turkmen.png"
                alt="turkmen"
                style={{ width: "40px" }}
              />
            </MenuItem>
            <MenuItem value={"English"}>
              <img src="images/a.png" alt="english" style={{ width: "40px" }} />
            </MenuItem>
            <MenuItem value={"Russian"}>
              <img
                src="images/russia.png"
                alt="russion"
                style={{ width: "40px" }}
              />
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default Navbar;
