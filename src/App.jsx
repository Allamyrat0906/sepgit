import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Index from "./component/Index";

import "./App.css";
import { useWidth } from "./core/hook";
import Stories_part from "./component/stories/Stories_part";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#487FFF",
      dark: "##458eff",
      light: "##519fff",
      contrastText: "#FEFEFE",
    },
    secondary: {
      main: "#B975EF2B",
      dark: "##a85790",
      light: "##b872a2",
      contrastText: "#090000",
    },
    grey: {
      900: "#191D21",
      800: "#656F77",
      700: "#ACB8C2",
      600: "#CDD9E3",
      500: "#E8EEF3",
      400: "#FFFFFF",
    },
  },
});
export const AppContext = createContext();
const App = () => {
  const width = useWidth();
  const checker = (w) => {
    return ["xs", "sm","md"].includes(w);
  };
  const [isMobile, setIsMobile] = useState(checker(width));
  useEffect(() => {
    setIsMobile(checker(width));
  }, [width]);
  return (
    <AppContext.Provider
      value={{
        mobile: isMobile,
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<Home />} />
              <Route path="/stories_part" element={<Stories_part/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
