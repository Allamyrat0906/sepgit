import React from "react";
import { homeStyle } from "../Home";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { Fonts } from "../../core/theme";

const styleCardStories = {
  height: "200px",
  width: "325px",
  borderRadius: "20px",
};
const Stories_home = () => {
  return (
    <Stack
      sx={{
        ...homeStyle,
        backgroundColor: "#487FFF",
      }}
    >
      <Grid container>
        <Grid item xs={5}>
          <Stack sx={{ padding: "90px 0px 0px 70px" }}>
            <Typography
              sx={{
                fontFamily: Fonts.PHILOSOPHER,
                fontSize: "2.5rem",
                color: "black",
              }}
            >
              Stories
            </Typography>
            <Typography
              sx={{
                fontFamily: Fonts.PHILOSOPHER,
                fontSize: "1rem",
                color: "black",
              }}
            >
              I would like to tell...
            </Typography>
            <Box sx={{ padding: "90px 0px 0px 0px" }}>
              <img
                style={{ width: "80%" }}
                src="/images/Stories_picture_avatar.svg"
                alt="Stories"
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack
            direction={"column"}
            spacing={3}
            sx={{ padding: "90px 0px 0px 0px" }}
          >
            <Stack spacing={3} direction={"row"}>
              <Card
                sx={{
                  backgroundColor: "#282C50",
                  ...styleCardStories,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: Fonts.PHILOSOPHER,
                    fontSize: "14px",
                    padding: "20px 20px 20px 20px",
                  }}
                >
                  I am Lyudmila. I am Quality Control Engineer in Industrial
                  Construction. When I was younger, I heard many stories from
                  grandfather who was a civil engineer. The stories inspired me
                  to eventually become an engineer. My advice for woman..
                </Typography>
                <Stack direction={"row"} spacing={22.5}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "white",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    read more
                  </Button>
                  <Box
                    sx={{
                      width: "12%",
                      background: "rgb(35, 35, 35, 0.3)",
                    }}
                  ></Box>
                </Stack>
              </Card>
              <Card
                sx={{
                  backgroundColor: "#6A48B1",
                  ...styleCardStories,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    padding: "20px 20px 20px 20px",
                    fontFamily: Fonts.PHILOSOPHER,
                  }}
                >
                  I am Lyudmila. I am Quality Control Engineer in Industrial
                  Construction. When I was younger, I heard many stories from
                  grandfather who was a civil engineer. The stories inspired me
                  to eventually become an engineer. My advice for woman..
                </Typography>
                <Stack direction={"row"} spacing={22.5}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "white",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    read more
                  </Button>
                  <Box
                    sx={{
                      width: "12%",
                      background: "rgb(35, 35, 35, 0.3)",
                    }}
                  ></Box>
                </Stack>
              </Card>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <Card
                sx={{
                  backgroundColor: "#1B8861",
                  ...styleCardStories,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: Fonts.PHILOSOPHER,
                    fontSize: "14px",
                    padding: "20px 20px 20px 20px",
                  }}
                >
                  I am Lyudmila. I am Quality Control Engineer in Industrial
                  Construction. When I was younger, I heard many stories from
                  grandfather who was a civil engineer. The stories inspired me
                  to eventually become an engineer. My advice for woman..
                </Typography>
                <Stack direction={"row"} spacing={22.5}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "white",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    read more
                  </Button>
                  <Box
                    sx={{
                      width: "12%",
                      background: "rgb(35, 35, 35, 0.3)",
                    }}
                  ></Box>
                </Stack>
              </Card>
              <Card
                sx={{
                  backgroundColor: "#D24B9C",
                  ...styleCardStories,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: Fonts.PHILOSOPHER,
                    fontSize: "14px",
                    padding: "20px 20px 20px 20px",
                  }}
                >
                  I am Lyudmila. I am Quality Control Engineer in Industrial
                  Construction. When I was younger, I heard many stories from
                  grandfather who was a civil engineer. The stories inspired me
                  to eventually become an engineer. My advice for woman..
                </Typography>
                <Stack direction={"row"} spacing={22.5}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "white",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    read more
                  </Button>
                  <Box
                    sx={{
                      width: "12%",
                      background: "rgb(35, 35, 35, 0.3)",
                    }}
                  ></Box>
                </Stack>
              </Card>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <Card
                sx={{
                  backgroundColor: "#E74500",
                  ...styleCardStories,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: Fonts.PHILOSOPHER,
                    fontSize: "14px",
                    padding: "20px 20px 20px 20px",
                  }}
                >
                  I am Lyudmila. I am Quality Control Engineer in Industrial
                  Construction. When I was younger, I heard many stories from
                  grandfather who was a civil engineer. The stories inspired me
                  to eventually become an engineer. My advice for woman..
                </Typography>
                <Stack direction={"row"} spacing={22.4}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "white",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    read more
                  </Button>
                  <Box
                    sx={{
                      width: "12%",
                      background: "rgb(35, 35, 35, 0.3)",
                    }}
                  ></Box>
                </Stack>
              </Card>
              <Card
                sx={{
                  backgroundColor: "white",
                  height: "200px",
                  width: "400px",
                  borderRadius: "20px  0px 0px 20px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "black",
                      fontFamily: Fonts.INTER,
                      fontSize: "30px",
                      fontWeight: "bold",
                      padding: "10px 20px 0px 40px",
                    }}
                  >
                    Show all stories
                  </Typography>
                  <Stack
                    spacing={4}
                    direction={"row"}
                    sx={{ padding: "10px 20px 10px 40px" }}
                  >
                    <img
                      width={"40%"}
                      src="/images/Stories_continue_avatar.svg"
                      alt="Continue"
                    />
                    <Button sx>
                      <img
                        width={"80%"}
                        src="/images/Stories_continue_buttom.svg"
                        alt="Buttom"
                      />
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Stories_home;
