import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/navbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Box, ListItemText, Stack, Typography } from "@mui/material";
import { Fonts } from "../../styles/theme";
import SepgitLogo from "../../icon/SepgitLogo";

const Desktopnavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack direction={"row"} spacing={1} sx={{ margin: "5px 0px 10px 0px" }}>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          border: "1px solid #464646",
          borderRadius: "15px",
        }}
      >
        <AppbarHeader>
          <SepgitLogo />
        </AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Billboard" />
          <ListItemText primary="Stories" />
          <ListItemText primary="Media" />
          <ListItemText primary="Media" />
          <ListItemText primary="Partners" />
          <ListItemText primary="Events" />
          <ListItemText primary="Search" />
        </MyList>

        <img
          width={"17%"}
          style={{ float: "right", marginRight: "20px" }}
          src="/images/BootcampSanly.svg"
        />
      </Stack>

      <Stack
        sx={{
          border: "1px solid #464646",
          borderRadius: "15px",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 0px 4px 0px ",
        }}
      >
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              borderRadius: "15px",
              margin: "10px 4px",
            }}
          >
            <img src="images/language.svg" alt="Language" />
          </Button>
          <Menu
            id="basic-menu"
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
        </Box>
      </Stack>
    </Stack>
  );
};

export default Desktopnavbar;
