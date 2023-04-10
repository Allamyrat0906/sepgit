import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { homeStyle } from '../Home'
import { Fonts } from '../../core/theme'
import { AppButton } from '../AppCommponent'

const Partners = () => {
  return (
    <Stack sx={{ backgroundColor: "grey.700" ,...homeStyle}}>
     <Grid container>
      <Grid item xs={6}>
<Stack spacing={6} sx={{  alignItems:"center",
               paddingTop:"123px" ,   paddingLeft:"115px"}}>
        <Typography   sx={{
                  fontFamily: Fonts.PHILOSOPHER,
                  color: "grey.400",
                  fontSize: "2.5rem",
                  width: "80%",
               
                }}>
        Как развитие гибких навыков влияет на карьеру
        </Typography>
        <Typography  sx={{
                  fontFamily: Fonts.INTER,
                  color: "grey.400",
                  fontSize: "1.5rem",
                  width: "80%",
                
                }}>Что такое soft skills, зачем они нужны и как их развивать?</Typography></Stack>
                <Stack 
                sx={{ paddingTop: "50px" ,paddingLeft:"173px"}}
              >
                <AppButton
                  sx={{ width: "180px", fontSize: "100%" }}
                  variant="contained"
                >
                  Подробнее
                </AppButton>
              </Stack>
              <Stack
                sx={{ justifyContent: "center", marginTop: "40px" }}
                spacing={6}
                direction={"row"}
              >
                <img src="/images/Group_12.svg" alt="Group" />
                <img src="/images/idea.svg" alt="idea" />
              </Stack>
      </Grid>
      <Grid item xs={6}>
<Stack sx={{width:"80%"}}>
  <img src="/images/Partner.svg" alt="partnera"/> 
</Stack>
      </Grid>
     </Grid>
    </Stack>
  )
}

export default Partners