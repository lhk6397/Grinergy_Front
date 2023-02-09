import { lazy } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr/_internal";
import axios from "axios";
import { Footer, Header, MetaTag, ScrollToTop } from "./components";

const AnimatedRoutes = lazy(() => import("./AnimatedRoutes"));
const Wrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  position: relative;
`;

const fetcher = async (url) => {
  return await (
    await axios.get(url, {
      withCredentials: true,
    })
  ).data;
};

function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <BrowserRouter>
        <MetaTag />
        <ScrollToTop />
        <Wrapper>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
