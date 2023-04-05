import { Stack } from '@mui/material'
import React from 'react'
import Billboard from './home/Billboard'
import Events from './home/Events'
import Media from './home/Media'
import Partners from './home/Partners'
import Stories from './home/Stories'


export const homeStyle={
    height: '800px',
     borderRadius: '30px',
    backgroundColor:"secondary.main"
}
const Home = () => {
  return (
  <Stack spacing={5} sx={{marginTop:"70px"}}>
    <Billboard/>
    <Stories/>
    <Media/>
    <Partners/>
    <Events/>
  </Stack>
  )
}

export default Home