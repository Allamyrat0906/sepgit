import { Box, Button, Stack, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Colors, Fonts } from "../core/theme";

const styleButton = {
  color: "grey.400",
  textTransform: "none",
  fontFamily: Fonts.INTER,
  fontWeight: "500",
  fontSize: "19px",
  ":active": {
    bgcolor: "#519fff",
  },
};
export const HideNavbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <Button
        onClick={() => changeRoute("billboard")}
        sx={{
          ...styleButton,
        }}
      >
        Billboard
      </Button>
      <Button
        onClick={() => changeRoute("stories_part")}
        sx={{ ...styleButton }}
      >
        Stories
      </Button>
      <Button onClick={() => changeRoute("videos")} sx={{ ...styleButton }}>
        Media
      </Button>
      <Button sx={{ ...styleButton }}>Partners</Button>
      <Button sx={{ ...styleButton }}>Events</Button>
      <Button
        startIcon={<img src="images/search.svg" />}
        sx={{ ...styleButton }}
      >
        Search
      </Button>{" "}
      <Box
        sx={{
          display: {
            lg: "block",
            md: "block",
            xs: "none",
          },
          pt: 1,
        }}
      >
        <img
          src="/images/Frame_logo.svg"
          alt="bootcamp"
          width={"85%"}
          fill={Colors.PRIMARY}
        />
      </Box>
      <Stack
        sx={{
          borderRadius: "15px",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 0px 0px 0px",

          display: {
            lg: "none",
            md: "block",
            xs: "block",
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

export default HideNavbar;

{
  /* <Stack
sx={{
  width: "100px",
  display: {
    xs: "block",
    md: "block",
    lg: "none",
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
