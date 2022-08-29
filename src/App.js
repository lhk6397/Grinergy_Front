import { lazy, Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header, ScrollToTop, Loader } from "./components";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Contact = lazy(() => import("./pages/Contact"));
const Investors = lazy(() => import("./pages/Investors"));
const Story = lazy(() => import("./pages/Story"));
const History = lazy(() => import("./pages/History"));
const Continue = lazy(() => import("./pages/Continue"));

const MarginTop = styled.div`
  height: 17vh;
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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/investors" element={<Investors />}></Route>
            <Route path="/about/ourstory" element={<Story />}></Route>
            <Route path="/about/history" element={<History />}></Route>
            <Route path="/continue" element={<Continue />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
