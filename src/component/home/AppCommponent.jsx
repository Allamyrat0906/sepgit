import React from 'react'
import { Fonts } from '../../core/theme';
import { styled, } from "@mui/material/styles";
import { Button } from '@mui/material';

const AppCommponent = () => {
  return (
    <></>
  )
}

export const AppButton = styled(Button)(
    ({ theme}) => `
        background: linear-gradient(102.3deg, ${theme.palette.primary.dark} -4.62%, ${theme.palette.primary.light} 178.22%);
        box-shadow: 0px 20px 40px rgba(128, 143, 150, 0.19);
        border-radius: 2px;
        color: ${theme.palette.primary.contrastText};
        font-family: ${Fonts.INTER};
        padding: 12px;
    `
);

export default AppCommponent