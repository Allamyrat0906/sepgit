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
          paddingTop: {
            lg: "3%",
            md: "3%",
            sm: "6%",
            xs: "6%",
          },
          paddingLeft: {
            lg: "3%",
            md: "3%",
            sm: "3%",
            xs: "3%",
          },
          paddingRight: {
            lg: "3%",
            md: "3%",
            sm: "3%",
            xs: "3%",
          },
        }}
      >
        <Outlet />
        <Footer />
      </Paper>
    </Paper>
  );
};

export default Index;

// {loading ? (
//   <Loading />
// ) : (
//   }
