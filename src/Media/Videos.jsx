import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import Podcasts from "./Podcasts";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const navigate = useNavigate();
  function changeRoute(path) {
    navigate(path);
    if (props.close) {
      props.close();
    }
  }
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        marginTop: "70px",
      }}
    >
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box
            sx={{
              border: " 1px solid #1E1E1E",
              borderRadius: "16px",
              width: "30%",
              height: "70px",
            }}
          >
            <Stack
              direction={"row"}
              spacing={4}
              sx={{
                padding: "15px 10px 15px 30px",
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "120px", position: "static" }}
              >
                Videos
              </Button>
              <Button
                onClick={() => changeRoute("podcast")}
                variant="text"
                sx={{ color: "white", width: "120px", position: "static" }}
              >
                Podcasts
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              border: " 1px solid #1E1E1E",
              borderRadius: "16px",
              width: "50%",
              height: "70px",
            }}
          >
            <Stack direction={"row"}>
              <Button
                sx={{ width: "20px", height: "70px", position: "static" }}
              >
                <img src="/images/searchh.svg" alt="ser" />
              </Button>
              <TextField
                sx={{
                  paddingTop: "7px",
                  width: "85%",
                  height: "100px",
                }}
                placeholder="Search for videos"
              ></TextField>
            </Stack>
          </Box>
        </Stack>
        <Grid container>
          <Grid item xs={9}>
            sss
          </Grid>
          <Grid item xs={3}>
            asss
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Videos;
