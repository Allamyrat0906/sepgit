import { Button, FormControl, Stack } from "@mui/material";
import React from "react";


const Example = () => {
  return (
    <Stack direction={"row"}
      sx={{
        backgroundColor: "black",
        position: "fixed",
     
        height: "100px",
        width: "100%",
        padding: "14px 40px 10px 30px",
      }}
    >
      <Stack   direction={"row"}
        sx={{
          width: "90%",
          border: "1px solid #464646",
          borderRadius: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}></Stack>
      <Stack>

     
      <FormControl sx={{
        display: {
          lg:"none"
        }
      }}>
        <Select
          sx={{
            borderRadius: "15px",
            height: "80px",
            width: "90px",
            marginLeft: "10px",
          }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem><img src="images/language.svg" alt="language"/></MenuItem>
          <MenuItem value={"Turkmen"}>
            <img
              src="images/turkmen.png"
              alt="turkmen"
              style={{ width: "50px" }}
            />
          </MenuItem>
          <MenuItem value={"English"}>
            <img src="images/a.png" alt="english" style={{ width: "50px" }} />
          </MenuItem>
          <MenuItem value={"Russian"}>
            <img
              src="images/russia.png"
              alt="russion"
              style={{ width: "50px" }}
            />
          </MenuItem>
        </Select>
      </FormControl>

      </Stack>
    </Stack>
  );
};

export default Example;
