import React from "react";
import { Fonts } from "../core/theme";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const AppCommponent = () => {
  return <></>;
};

export const AppButton = styled(Button)(
  ({ theme }) => `
        background: linear-gradient(102.3deg, ${theme.palette.primary.dark} -4.62%, ${theme.palette.primary.dark} 178.22%);
        border-radius: 10px;

        font-family: ${Fonts.INTER};
        padding: 12px;
        position: static;
    `
);

export default AppCommponent;
