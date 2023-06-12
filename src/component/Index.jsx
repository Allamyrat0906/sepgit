import { Box, Paper, useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Index = () => {
  return (
    <Paper elevation={0}>
      <Box
        right={0}
        position={"fixed"}
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "black",
          zIndex: 100,
        }}
      >
        <Navbar />
      </Box>
      <Box sx={{ backgroundColor: "black", }}>
        <Outlet />
      </Box>

      <Footer />
    </Paper>
  );
};

export default Index;

// {loading ? (
//   <Loading />
// ) : (
//   }
