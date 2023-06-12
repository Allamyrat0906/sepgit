import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./component/Index";
import "./App.css";
import theme from "./styles/theme";
import { Container } from "@mui/material";
import Home from "./component/Home/Home";

export const AppContext = createContext();
const App = () => {
  const [applanguage, setApplanguage] = useState("tm");
  return (
    <AppContext.Provider
      value={{
        applanguage: applanguage,
        setApplanguage: setApplanguage,
      }}
    >
      <ThemeProvider theme={theme}>
        <Container
          maxWidth={false}
          sx={{ backgroundColor: "black",}}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />}>
                <Route index element={<Home />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
