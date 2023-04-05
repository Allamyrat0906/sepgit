import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Colors, Fonts } from "../core/theme";
import Logo from "./icon/Logo";
import SanlyBilimLogo from "./icon/SanlyBilimLogo";
import { AppContext } from "../App";
import HideNavbar from "./HideNavbar";
import MobileDrawer from "./MobileDrawer";


const Navbar = () => {
  const { mobile}=useContext(AppContext)
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        padding: "14px 30px 10px 30px",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          padding: "12px",
          width: "90%",
          border: "1px solid #464646",
          borderRadius: "15px",
          justifyContent: "space-between",
        }}
        spacing={14}
      >
        <Box sx={{ left: "20px" }} onClick={() => navigate("/")}>
          <Logo fill={Colors.PRIMARY} />
        </Box>
     {mobile ? <MobileDrawer /> : <HideNavbar   mobile={mobile} />}


      </Stack>
    </Stack>
  );
};

export default Navbar;
