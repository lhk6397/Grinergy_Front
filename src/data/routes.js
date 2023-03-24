import {
  Contact,
  History,
  Home,
  Investors,
  News,
  NotFound,
  Notice,
  NoticeDetail,
  OurStory,
  Product,
  SearchedNotice,
} from "../pages/client";
import SearchedNews from "../pages/client/SearchedNews";

export const clientRoutes = [
  { link: "/", element: <Home />, title: "GRINERGY" },
  { link: "/home", element: <Home />, title: "GRINERGY" },
  { link: "/about/ourstory", element: <OurStory />, title: "Our Story" },
  { link: "/about/history", element: <History />, title: "History" },
  { link: "/product", element: <Product />, title: "Product" },
  { link: "/investors", element: <Investors />, title: "Investors" },
  { link: "/notice", element: <Notice />, title: "Notice" },
  {
    link: "/notice/search",
    element: <SearchedNotice />,
    title: "Searched Notices",
  },
  {
    link: "/notice/:noticeId",
    element: <NoticeDetail />,
    title: "Notice Details",
  },
  { link: "/news", element: <News />, title: "News" },
  { link: "/news/search", element: <SearchedNews />, title: "Searched News" },
  { link: "/contact", element: <Contact />, title: "Contact" },
  { link: "*", element: <NotFound />, title: "Not Found" },
];
