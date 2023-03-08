import Auth from "../../hoc/authHOC";
import Layout from "./Layout";
import UserIndex from "./user/UserIndex";
import UserCreate from "./user/UserCreate";
import NoticeIndex from "./notice/NoticeIndex";
import NoticeCreate from "./notice/NoticeCreate";
import NoticeUpdate from "./notice/NoticeUpdate";
import NewsIndex from "./news/NewsIndex";
import NewsCreate from "./news/NewsCreate";
import NewsUpdate from "./news/NoticeUpdate";
import AdminLogin from "./AdminLogin";
import AdminSearchedNotice from "./notice/AdminSearchedNotice";
import AdminSearchedNews from "./news/AdminSearchedNews";

const AuthLayout = Auth(Layout);
const AuthAdminLogin = Auth(AdminLogin, false, false);

export {
  UserIndex,
  UserCreate,
  NoticeIndex,
  NoticeCreate,
  NoticeUpdate,
  AdminSearchedNotice,
  AuthAdminLogin,
  AuthLayout,
  NewsIndex,
  NewsCreate,
  NewsUpdate,
  AdminSearchedNews,
};
