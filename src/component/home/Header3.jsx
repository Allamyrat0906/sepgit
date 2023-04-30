import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { homeStyle } from "../Home";

import { Colors, Fonts } from "../../core/theme";
import { AppButton } from "../AppCommponent";
import { AppContext } from "../../App";
import { getLanguageValue } from "../../core/utils.mjs";

const Header3 = ({ item }) => {
  const { applanguage } = useContext(AppContext);
  return (
    <Stack
      sx={{
        ...homeStyle,
        backgroundColor: "#1E1E1E",
      }}
    >
      <Grid container>
        <Grid item xs={5}>
          <Stack direction={"row"}>
            <Box sx={{ paddingLeft: "70px" }}>
              <img src="/images/Mask2.svg" alt="Mask" />
            </Box>
            <Stack direction={"column"}>
              <Stack direction={"row"} sx={{ padding: "50px 0px 0px 70px" }}>
                <Box>
                  <img src={item.image} alt="Header" />
                </Box>
                <Stack
                  direction={"column"}
                  sx={{ padding: "20px 0px 0px 30px" }}
                >
                  <Typography sx={{ fontFamily: Fonts.PHILOSOPHER }}>
                    {`${item.name} ${item.surname}`}
                  </Typography>

                  <Typography
                    sx={{
                      color: Colors.PRIMARY,
                      fontFamily: Fonts.INTER,
                    }}
                  >
                    {item.job}
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
                {getLanguageValue(applanguage, item, "topic")}
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
