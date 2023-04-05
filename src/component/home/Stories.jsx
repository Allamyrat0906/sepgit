import { Stack ,Grid} from '@mui/material'
import React from 'react'
import { homeStyle } from '../Home'


const Stories = () => {
  return (
    <Stack sx={{ backgroundColor: "grey.700" ,...homeStyle}}>
    <Grid container>
<Grid item xs={9}>

</Grid>
<Grid  item xs={3}> 

</Grid>

    </Grid>
 </Stack>
  )
}

export default Stories