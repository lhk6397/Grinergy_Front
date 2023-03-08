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

// /admin
// /admin/index/?
// /admin/update/?
// /admin/search/?

//   export const adminRoutes = [
//     {
//       link: "/admin",
//       element: <Dashboard />,
//       title: "Admim Dashboard",
//       subRoutes: [
//         { link: "index/:item", element: <AItemList />, title: "" },
//         { link: "edit/:item", element: <AItemEdit />, title: "" },
//         { link: "search/:item", element: <ASearchList />, title: "" },
//       ],
//     },
//     { link: "/admin/login", element: <AdminLogin />, title: "Admin Login" },
//   ];

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
    title: "Discovered Notices",
  },
  {
    link: "/notice/:noticeId",
    element: <NoticeDetail />,
    title: "Notice Details",
  },
  // { link: "/news", element: <News />, title: "News" },
  { link: "/contact", element: <Contact />, title: "Contact" },
  { link: "*", element: <NotFound />, title: "Not Found" },
];
