import React from 'react'

const Border = () => {
  return (
    <Stack
    sx={{
      width: "7%",
      border: "1px solid #464646",
      borderRadius: "15px",
    }}
  >
    <Box justifyContent={"center"}>

      <Select label="Language">
        <MenuItem value={"Turkmen"}>
          {<img src="images/turkmen.png" width={"100%"} />}
        </MenuItem>
        <MenuItem value={"English"}>
          {<img src="images/a.png" width={"100%"} />}
        </MenuItem>
        <MenuItem value={"Russian"}>
          {<img src="images/russia.png" width={"100%"} />}
        </MenuItem>
      </Select>
    </Box>
  </Stack>
  )
}

export default Border