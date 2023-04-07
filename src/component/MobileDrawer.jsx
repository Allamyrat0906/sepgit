import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import Logo from "./icon/Logo"
import Slide from "@mui/material/Slide";
import { Box, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Colors } from "../core/theme";
import { HideNavbar } from "./HideNavbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const MobileDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <Stack >
      <IconButton onClick={handleOpen}>
        <img src="images/menu.svg" />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Stack sx={{ p: 5 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center-between"}
          >
            <Box
              onClick={() => {
                handleClose();
                navigate("/");
              }}
            >
              <Logo fill={Colors.PRIMARY} />
            </Box>
            <IconButton onClick={handleClose}></IconButton>
          </Stack>
          <HideNavbar mobile={true} close={handleClose} />
        </Stack>
      </Dialog>
    </Stack>
  );
};

export default MobileDrawer;


