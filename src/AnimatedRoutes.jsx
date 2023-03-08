import React from "react";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Continue, NotFound, NoticeDetail } from "./pages/client";

import {
  AdminSearchedNews,
  AdminSearchedNotice,
  AuthAdminLogin,
  AuthLayout,
  NewsCreate,
  NewsIndex,
  NewsUpdate,
  NoticeCreate,
  NoticeIndex,
  NoticeUpdate,
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
        <Route exact path="/continue" element={<Continue />} />
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
          <Route exact index element={<NoticeIndex />} />
          <Route exact path="notice" element={<NoticeIndex />} />
          <Route exact path="notice/search" element={<AdminSearchedNotice />} />
          <Route exact path="notice/:noticeId" element={<NoticeDetail />} />
          <Route exact path="createNotice" element={<NoticeCreate />} />
          <Route
            exact
            path="notice/:noticeId/update"
            element={<NoticeUpdate />}
          />
          <Route exact path="news" element={<NewsIndex />} />
          <Route exact path="news/search" element={<AdminSearchedNews />} />
          {/* <Route exact path="news/:newsId" element={<newsDetail />} /> */}
          <Route exact path="createNews" element={<NewsCreate />} />
          <Route exact path="news/:newsId/update" element={<NewsUpdate />} />
          <Route exact path="user" element={<UserIndex />} />
          <Route exact path="createUser" element={<UserCreate />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
