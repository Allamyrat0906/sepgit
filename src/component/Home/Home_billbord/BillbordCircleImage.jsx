import { Card, Stack } from "@mui/material";
import React from "react";
const styleCard = {
  width: "300px",
  height: "180px",
};

const BillbordCircleImage = () => {
  return (
    <Stack spacing={5}>
      <Card
        sx={{
          ...styleCard,
        }}
      >
        <img
          src={"/images/WomanPowerCrowded.svg"}
          alt={"women"}
          style={{ width: "90%" }}
        />
      </Card>
      <Card
        sx={{
          ...styleCard,
        }}
      >
        <img
          src={"/images/WomanPowerCrowded.svg"}
          alt={"women"}
          style={{ width: "90%" }}
        />
      </Card>
      <Card
        sx={{
          ...styleCard,
        }}
      >
        <img
          src={"/images/WomanPowerCrowded.svg"}
          alt={"women"}
          style={{ width: "90%" }}
        />
      </Card>
    </Stack>
  );
};

export default BillbordCircleImage;
