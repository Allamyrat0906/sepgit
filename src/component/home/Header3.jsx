import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { homeStyle } from "../Home";

import { Colors, Fonts } from "../../core/theme";
import { AppButton } from "../AppCommponent";

const Header3 = () => {
  return (
    <Stack sx={{ ...homeStyle, backgroundColor: "#1E1E1E" }}>
      <Grid container>
        <Grid item xs={5}>
          <Stack direction={"row"}>
            <Box sx={{ paddingLeft: "70px" }}>
              <img src="/images/Mask2.svg" alt="Mask" />
            </Box>
            <Stack direction={"column"}>
              <Stack direction={"row"} sx={{ padding: "50px 0px 0px 70px" }}>
                <Box>
                  <img src="images/Avatar.svg" alt="Header" />
                </Box>
                <Stack
                  direction={"column"}
                  sx={{ padding: "20px 0px 0px 30px" }}
                >
                  <Typography sx={{ fontFamily: Fonts.PHILOSOPHER }}>
                    Aylar Dowletgeldiyeva
                  </Typography>

                  <Typography
                    sx={{
                      color: Colors.PRIMARY,
                      fontFamily: Fonts.INTER,
                    }}
                  >
                    Art director
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontFamily: Fonts.PHILOSOPHER,
                  fontSize: "2rem",
                  padding: "50px 0px 0px 70px",
                }}
              >
                From economics student, to art director
              </Typography>
              <Box
                sx={{
                  fontFamily: Fonts.INTER,
                  padding: "300px 0px 0px 70px",
                }}
              >
                <AppButton variant="contained"> Read article</AppButton>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={7}>
          <Box sx={{ width: "100%", padding: "70px 0px 0px 0px" }}>
            <img src="/images/Header3.svg" alt="Header" />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Header3;
