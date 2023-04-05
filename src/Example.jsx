import { Stack } from "@mui/material";
import React from "react";

const Example = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        position: "fixed",
        backgroundColor: "black",
        width: "100%",
        height: "80px",
        padding: "14px 0px",
        justifyContent: "space-evenly",
      }}
    >
      <Stack
        sx={{
          width: "86%",
          border: "1px solid #464646",
          borderRadius: "15px",
        }}
      ></Stack>
      <Stack
        sx={{
          width: "8%",
          border: "1px solid #464646",
          borderRadius: "20px",
        }}
      ></Stack>
    </Stack>
  );
};

export default Example;
