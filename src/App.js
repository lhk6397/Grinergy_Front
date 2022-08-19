import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header, Overlay, ScrollToTop, Loader } from "./components";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Contact = lazy(() => import("./pages/Contact"));
const Investors = lazy(() => import("./pages/Investors"));
const Story = lazy(() => import("./pages/Story"));
const History = lazy(() => import("./pages/History"));
const Continue = lazy(() => import("./pages/Continue"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
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
      <Overlay />
    </BrowserRouter>
  );
}

export default App;
