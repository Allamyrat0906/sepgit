import React, { useState, useEffect } from "react";
import Billboard from "./Billboard";
import Stories from "./Stories";
import Media from "./Media";
import Partners from "./Partners";
import Events from "./Events";
import Other from "./Other";
import { Stack } from "@mui/material";
const Bill = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  function getDataEvents() {
    setLoading(true);
    AxiosInstance.get("/sepgit/bilboard/get-bilboards")
      .then((response) => {
        setLoading(false);
        setData(response.data.body);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getDataEvents();
  }, []);

  return (
    <Stack spacing={5} sx={{ marginTop: "60px" }}>
      {`${data.image_tm}`}
    </Stack>
  );
};

export default Bill;
