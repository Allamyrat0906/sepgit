import { Paper } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Index = () => {
  return (
    <Paper elevation={0}>
      <Stack
        direction={"row"}
        sx={{
          position: "fixed",
          backgroundColor: "black",
          width: "100%",
          zIndex: 100,
        }}
      >
        <Navbar />
      </Stack>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "black",
          borderRadius: "0",
          paddingTop: "50px",
          paddingLeft: "30px",
          paddingRight: "40px",
        }}
      >
        <Outlet />
        <Footer />
      </Paper>
    </Paper>
  );
};

export default Index;
