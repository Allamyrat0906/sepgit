import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Colors, Fonts } from "../core/theme";

const styleButton = {
  color: "grey.400",
  textTransform: "none",
  fontFamily: Fonts.INTER,
  fontWeight: "500",
  fontSize: "19px",
};
export const HideNavbar = (props) => {
  const [age, setAge] = React.useState("");
  const [show, setShow] = useState(false);
  let fruits = [
    { label: "Turkmen", value: "images/turkmen.png" },
    { label: "English", value: "images/a.png" },
    { label: "Russian", value: "images/russia.png" },
  ];

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const mobile = props.mobile;
  const navigate = useNavigate();
  function changeRoute(path) {
    navigate(path);
    if (props.close) {
      props.close();
    }
  }
  return (
    <Stack
      direction={mobile ? "column" : "row"}
      alignItems={"center"}
      spacing={5}
    >
      <Button onClick={() => changeRoute("bill")} sx={{ ...styleButton }}>
        Billboard
      </Button>
      <Button
        onClick={() => changeRoute("stories_part")}
        sx={{ ...styleButton }}
      >
        Stories
      </Button>
      <Button sx={{ ...styleButton }}>Media</Button>
      <Button sx={{ ...styleButton }}>Partners</Button>
      <Button sx={{ ...styleButton }}>Events</Button>
      <Button
        startIcon={<img src="images/search.svg" />}
        sx={{ ...styleButton }}
      >
        Search
      </Button>{" "}
      <Box
        sx={{
          display: {
            lg: "block",
            md: "block",
            xs: "none",
          },
          pt: 1,
        }}
      >
        <img
          src="/images/Frame_logo.svg"
          alt="bootcamp"
          width={"85%"}
          fill={Colors.PRIMARY}
        />
      </Box>
      <Stack
        sx={{
          width: "100px",
          display: {
            xs: "block",
            md: "block",
            lg: "none",
          },
          border: "1px solid #464646",
          borderRadius: "15px",
        }}
      >
        <button
          onClick={() => setShow(!show)}
          style={{
            borderWidth: "0px",
            backgroundColor: "transparent",
            padding: "14px 12px 12px 26px",
          }}
        >
          <img
            src="images/language.svg"
            style={{ width: "36px", height: "36px" }}
          />
        </button>
        <div
          style={{
            position: "absolute",
            width: "100px",
            top: "64px",
          }}
        >
          {show
            ? fruits.map((fruit, index) => (
                <Stack
                  key={index}
                  onClick={() => {
                    setFlag(fruit);
                    setShow(false);
                  }}
                  sx={{
                    width: "32px",
                    height: "24px",
                    marginTop: "8px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  // value={fruit.value}
                >
                  <img
                    src={fruit.value}
                    style={{
                      width: "32px",
                      height: "24px",
                      marginRight: "8px ",
                    }}
                  />

                  {fruit.label}
                </Stack>
              ))
            : null}
        </div>
      </Stack>
    </Stack>
  );
};

export default HideNavbar;
