import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import "./styles/font.css";
import "./styles/style.css";
import theme from "./styles/theme";
import { CookiesProvider } from "react-cookie";
import GlobalStyle from "./styles/globalStyles";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <HelmetProvider>
      <CookiesProvider>
        <GlobalStyle />
        <App />
      </CookiesProvider>
    </HelmetProvider>
  </ThemeProvider>
);
