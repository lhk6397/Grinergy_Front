import React from "react";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Contact,
  Continue,
  History,
  Home,
  Investors,
  NotFound,
  Notice,
  NoticeDetail,
  Product,
  SearchedPost,
  Story,
} from "./pages/client";

import {
  AdminSearchedPost,
  AuthAdminLogin,
  AuthLayout,
  PostCreate,
  PostIndex,
  PostUpdate,
  UserCreate,
  UserIndex,
} from "./pages/admin";
import { clientRoutes } from "./data/routes";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* user */}
        {clientRoutes.map((route, idx) => (
          <Route key={idx} exact path={route.link} element={route.element} />
        ))}
        {/* <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/product" element={<Product />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/notice" element={<Notice />}></Route>
        <Route exact path="/notice/search" element={<SearchedPost />}></Route>
        <Route exact path="/notice/:postId" element={<NoticeDetail />}></Route>
        <Route exact path="/investors" element={<Investors />}></Route>
        <Route exact path="/about/ourstory" element={<Story />}></Route>
        <Route exact path="/about/history" element={<History />}></Route>
        <Route exact path="/continue" element={<Continue />}></Route> */}

        {/* admin */}
        <Route exact path="/admin/login" element={<AuthAdminLogin />} />
        <Route exact path="/admin" element={<AuthLayout />}>
          <Route exact index element={<PostIndex />} />
          <Route exact path="post" element={<PostIndex />} />
          <Route exact path="post/search" element={<AdminSearchedPost />} />
          <Route exact path="post/:postId" element={<NoticeDetail />} />
          <Route exact path="createPost" element={<PostCreate />} />
          <Route exact path="post/:postId/update" element={<PostUpdate />} />
          <Route exact path="user" element={<UserIndex />} />
          <Route exact path="createUser" element={<UserCreate />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
