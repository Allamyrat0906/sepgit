import React from "react";
import { useTheme } from "@mui/material/styles";
import { Colors } from "../../../styles/theme";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import {
  BannerContainer,
  BillboardDefText,
  BillboardHeadText,
} from "../../../styles/homebillboard";
import Group10 from "../../../icon/Group10";
import { AppButton, AppButtonCover } from "../../../styles/AppButton";
import BillbordCircleImage from "./BillbordCircleImage";

const styleHomeBillboar = {
  display: {
    lg: "block",
    md: "none",
    sm: "none",
    xs: "none",
  },
};
const HomeBillbord = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        ...styleHomeBillboar,
        paddingTop: "100px",
      }}
    >
      <BannerContainer>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <BillboardHeadText>
                Новое <br />
                <Box style={{ paddingLeft: "50px", marginTop: "-30px" }}>
                  мероприятие <Group10 />
                </Box>
              </BillboardHeadText>
              <BillboardDefText sx={{ paddingTop: "40px" }}>
                Что такое soft skills, зачем они нужны и как их развивать?
              </BillboardDefText>
              <AppButtonCover>
                <AppButton variant="contained" sx={{ width: "150px" }}>
                  Подробнее
                </AppButton>
              </AppButtonCover>
              <Box sx={{ padding: "20px 0px 0px 0px" }}>
                <img
                  src={"/images/WomanPowerCrowded.svg"}
                  alt={"women"}
                  style={{ width: "85%", display: "flex" }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{}}>
              <BillbordCircleImage />
            </Box>
          </Grid>
        </Grid>
      </BannerContainer>
    </Stack>
  );
};

export default HomeBillbord;
