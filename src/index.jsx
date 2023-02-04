import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import "./styles/font.css";
import "./styles/style.css";
import theme from "./styles/theme";
import { CookiesProvider } from "react-cookie";
import GlobalStyle from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CookiesProvider>
      <GlobalStyle />
      <App />
    </CookiesProvider>
  </ThemeProvider>
);
