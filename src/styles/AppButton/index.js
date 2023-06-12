import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { Fonts } from "../theme";

export const AppButton = styled(Button)(
  ({ theme }) =>
    `
        background: linear-gradient(102.3deg, ${theme.palette.primary} -4.62%, ${theme.palette.primary} 178.22%);
        border-radius: 10px;
        font-family: ${Fonts.INTER};
        padding: 12px;
        position: static;
      
    `
);
export const AppButtonCover = styled(Box)(() => ({
  paddingTop: "60px",
  paddingLeft: "350px",
}));
