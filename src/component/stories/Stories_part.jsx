import { Card, Container, Grid, Box, Stack } from "@mui/material";
import React from "react";

const Stories_part = () => {
  return (
    <Stack sx={{ height: "100vh", backgroundColor: "grey.1000" }}>
      <Stack sx={{ marginTop: "50px" }}>
        <Stack
          sx={{
            backgroundColor: "#1E1E1E",
            border: "1px solid #464646",
            borderRadius: "40px",
          }}
        >
          <Box>
            <img src="images/Srories.svg" alt="stories" width={"40%"} />
          </Box>
        </Stack>
      </Stack>
      <Stack direction={"row"} sx={{ paddingTop: "50px" }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Card variant="contained">salam</Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card variant="contained"> salam</Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card variant="contained">salam</Card>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Stack>
  );
};

export default Stories_part;
