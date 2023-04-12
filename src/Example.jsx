import { Button, Menu, MenuItem, Tab, Typography } from "@mui/material";
import React from "react";
import { Fonts } from "./core/theme";

const Example = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
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
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ width: "15%", position: "fixed" }}
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
          <img src="/images/russia.png" style={{ width: "15%" }} alt="russia" />
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
    </div>
  );
};

export default Example;
