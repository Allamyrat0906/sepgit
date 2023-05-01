import { Stack } from "@mui/material";
import React, { useContext } from "react";

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
import { AppContext } from "../App";

export const homeStyle = {
  height: "800px",
  borderRadius: "30px",
  backgroundColor: "secondary.main",
};
const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { mobile } = useContext(AppContext);

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

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Stack spacing={5} marginTop={mobile ? "30px" : "70px"}>
        <Billboard_home />
        <Header2 />
        <SwiperStyleHome data={data.podcasts} />
        <Stories_home data={data} />
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
