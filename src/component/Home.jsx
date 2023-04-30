import { Stack } from "@mui/material";
import React from "react";

import Header2 from "./home/Header2";

import SwiperStyleHome from "./home/SwiperStyleHome";
import Stories_home from "./home/Stories_home";
import Billboard_home from "./home/Billboard_home";
import MediaHome from "./home/MediaHome";
import Partnerss from "./home/Partnerss";
import PartnerSliper from "./home/PartnerSliper";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";
import { AxiosInstance } from "../Axios/AxiosInstance.mjs";

export const homeStyle = {
  height: "800px",
  borderRadius: "30px",
  backgroundColor: "secondary.main",
};
const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  function getData() {
    setLoading(true);
    AxiosInstance.get("/sepgit/other/get-home")
      .then((response) => {
        setLoading(false);
        setData(response.data.body);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Stack spacing={5} sx={{ marginTop: "70px" }}>
        <Billboard_home />
        <Header2 />
        <SwiperStyleHome />
        <Stories_home />
        <MediaHome />
        <Partnerss />
        <PartnerSliper />
      </Stack>
    </div>
  );
};

export default Home;
// data={data.podcasts}
// data={data.stories}
