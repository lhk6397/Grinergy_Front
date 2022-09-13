import React from "react";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Investors from "./pages/Investors";
import Story from "./pages/Story";
import History from "./pages/History";
import Continue from "./pages/Continue";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/investors" element={<Investors />}></Route>
        <Route path="/about/ourstory" element={<Story />}></Route>
        <Route path="/about/history" element={<History />}></Route>
        <Route path="/continue" element={<Continue />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
