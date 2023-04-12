import { Stack } from "@mui/material";
import React from "react";
import Header1 from "./home/Header1";
import Header2 from "./home/Header2";
import Header3 from "./home/Header3";

export const homeStyle = {
  height: "800px",
  borderRadius: "30px",
  backgroundColor: "secondary.main",
};
const Home = () => {
  return (
    <Stack spacing={5} sx={{ marginTop: "70px" }}>
      <Header1 />
      <Header2 />
      <Header3 />
    </Stack>
  );
};

export default Home;
