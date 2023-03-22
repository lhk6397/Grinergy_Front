import { lazy, useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr/_internal";
import axios from "axios";
import { Footer, Header, MetaTag, ScrollToTop } from "./components";
import { LanguageContext } from "./context/LanguageContext";
import { useCookies } from "react-cookie";

const AnimatedRoutes = lazy(() => import("./AnimatedRoutes"));
const Wrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
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
  const [isENG, setIsENG] = useState(false);
  const [cookies] = useCookies(["ENG"]);
  useEffect(() => {
    cookies["ENG"] ? setIsENG(true) : setIsENG(false);
  }, [cookies]);
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <BrowserRouter>
        <LanguageContext.Provider value={{ isENG, setIsENG }}>
          <MetaTag />
          <ScrollToTop />
          <Wrapper>
            <Header />
            <AnimatedRoutes />
            <Footer />
          </Wrapper>
        </LanguageContext.Provider>
      </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
