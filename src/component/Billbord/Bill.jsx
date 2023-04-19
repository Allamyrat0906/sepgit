import React from "react";
import Billboard from "./Billboard";
import Stories from "./Stories";
import Media from "./Media";
import Partners from "./Partners";
import Events from "./Events";
import Other from "./Other";
import { Stack } from "@mui/material";
const Bill = () => {
  return (
    <Stack spacing={5} sx={{ marginTop: "60px" }}>
      <Billboard />
      <Stories />
      <Media />
      <Partners />
      <Events />
      <Other />
    </Stack>
  );
};

export default Bill;
