import { Container, Grid, Stack, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Component } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#313131",
    },
    secondary: {
      main: "#326555",
    },
    mode: "dark",
  },
});
const Example = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          backgroundColor: "black",
          width: "100%",
          height: "70px",
          position: "fixed",
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <Typography>sal</Typography>
          </Grid>
          <Grid item xs={1}>
            sasas
          </Grid>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
};

export default Example;
