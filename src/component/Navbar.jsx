import { Box, MenuItem, Stack, Menu, Typography, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { Colors, Fonts } from "../core/theme";
import Logo from "./icon/Logo";
import { AppContext } from "../App";
import HideNavbar from "./HideNavbar";
import MobileDrawer from "./MobileDrawer";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { mobile } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      spacing={1}
      direction={"row"}
      sx={{
        width: "100%",
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
      paddingLeft={(mobile ? "4%" : "3%", "3%")}
      paddingRight={(mobile ? "4%" : "3%", "3%")}
    >
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          border: "1px solid #464646",
          borderRadius: "15px",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "7px",
        }}
        spacing={15}
      >
        <Box alignItems={"center"} onClick={() => navigate("/")}>
          <Logo fill={Colors.PRIMARY} />
        </Box>
        {mobile ? <MobileDrawer /> : <HideNavbar mobile={mobile} />}
      </Stack>
      <Stack
        sx={{
          border: "1px solid #464646",
          borderRadius: "15px",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 0px 0px 0px",

          display: {
            lg: "block",
            md: "none",
            xs: "none",
          },
        }}
      >
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ backgroundColor: "black", borderRadius: "10px" }}
        >
          <img src="images/language.svg" alt="Language" />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock={true}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "15%" }}
        >
          <MenuItem onClick={handleClose}>
            <img
              src="/images/turkmen.png"
              style={{ width: "15%", height: "13px" }}
              alt="turkmen"
            />
            <Typography
              sx={{ fontFamily: Fonts.PHILOSOPHER, paddingLeft: "7px" }}
            >
              Türkmen dili
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img
              src="/images/russia.png"
              style={{ width: "15%" }}
              alt="russia"
            />
            <Typography
              sx={{ fontFamily: Fonts.PHILOSOPHER, paddingLeft: "7px" }}
            >
              Русский
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img src="/images/a.png" style={{ width: "15%" }} alt="english" />
            <Typography
              sx={{ fontFamily: Fonts.PHILOSOPHER, paddingLeft: "7px" }}
            >
              English
            </Typography>
          </MenuItem>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Navbar;

{
  /* <FormControl
        
        >
          <Select
            sx={{
              borderRadius: "15px",
              height: "80px",
              width: "90px",
              marginLeft: "10px",
              backgroundColor: "red",
            }}
            value={age}
            onChange={handleChange}
          >
            <MenuItem>
              <img
                src="images/language.svg"
                alt="language"
                style={{ width: "24px", height: "24px" }}
              />
            </MenuItem>
            <MenuItem value={"Turkmen"}>
              <img
                src="images/turkmen.png"
                alt="turkmen"
                style={{
                  width: "24px",
                  height: "24px",
                  // resizeMethod: "resize",
                }}
              />
            </MenuItem>
            <MenuItem value={"English"}>
              <img
                src="images/a.png"
                alt="english"
                style={{ width: "24px", height: "24px" }}
              />
            </MenuItem>
            <MenuItem value={"Russian"}>
              <img
                src="images/russia.png"
                alt="russion"
                style={{ width: "24px", height: "24px" }}
              />
            </MenuItem>
          </Select>
        </FormControl> */
}

{
  /* <Stack
        sx={{
          width: "100px",
          display: {
            xs: "none",
            md: "none",
            lg: "block",
          },
          border: "1px solid #464646",
          borderRadius: "15px",
        }}
      >
        <button
          onClick={() => setShow(!show)}
          style={{
            borderWidth: "0px",
            backgroundColor: "transparent",
            padding: "14px 12px 12px 26px",
          }}
        >
          <img
            src="images/language.svg"
            style={{ width: "36px", height: "36px" }}
          />
        </button>
        <div
          style={{
            position: "absolute",
            width: "100px",
            top: "64px",
          }}
        >
          {show
            ? fruits.map((fruit, index) => (
                <Stack
                  key={index}
                  onClick={() => {
                    setFlag(fruit);
                    setShow(false);
                  }}
                  sx={{
                    width: "32px",
                    height: "24px",
                    marginTop: "8px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  // value={fruit.value}
                >
                  <img
                    src={fruit.value}
                    style={{
                      width: "32px",
                      height: "24px",
                      marginRight: "8px ",
                    }}
                  />

                  {fruit.label}
                </Stack>
              ))
            : null}
        </div>
      </Stack> */
}
