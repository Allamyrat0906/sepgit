import { Card, Container, Grid, Paper, Stack } from "@mui/material";
import React from "react";

const Stories_part = () => {
  return (
    <Paper sx={{height:"100vh"}}>
      <Stack sx={{marginTop:"60px"}}>
      <Stack sx={{ padding: "8px 0px 8px 0px" , borderRadius:"25px", backgroundColor:"grey"}}>
        <img src="images/Stories.svg" alt="stories" />
      </Stack></Stack>
      <Stack direction={"row"} sx={{paddingTop:"50px"}}>
        <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card variant="contained">salam</Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card variant="contained"> salam</Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4 }>
            <Card variant="contained">salam</Card>
          </Grid>
        </Grid></Container>
      </Stack>
    </Paper>
  );
};

export default Stories_part;
