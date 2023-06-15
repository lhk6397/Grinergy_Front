import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { clientRoutes } from "../../data/routes";
const MetaTag = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    clientRoutes.map((route) => {
      if (pathname.includes(route.link) && route.link !== "/") {
        setLink(route.link);
        setTitle(route.title);
      }
    });
    if (pathname === "/") {
      setTitle("GRINERGY");
    }
  }, [pathname]);
  return (
    <Helmet>
      <meta charset="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={"https://www.grinergy.tech"} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="/logo.png" /> */}
      <meta
        property="og:description"
        content={"환경, 혁신, 에너지, 그리고 푸른 미래를 향한 그리너지"}
      />
      <meta property="og:site_name" content="GRINERGY" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:locale" content="en_US" />
      {/* <meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" />  */}
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={"환경, 혁신, 에너지, 그리고 푸른 미래를 향한 그리너지"}
      />
      {/* <meta name="twitter:image" content="/logo.png" /> */}
      <link rel="canonical" href={`https://www.grinergy.tech${link}`} />
      <meta
        name="description"
        content={"환경, 혁신, 에너지, 그리고 푸른 미래를 향한 그리너지"}
      />
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTag;
