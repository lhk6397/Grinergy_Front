import { lazy, Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header, ScrollToTop, Loader } from "./components";
const AnimatedRoutes = lazy(() => import("./AnimatedRoutes"));

const MarginTop = styled.div`
  height: 17vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 12vh;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 8.42592vh;
`;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Header />
          <MarginTop />
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
