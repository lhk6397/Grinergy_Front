import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import * as L from "../../styles/admin/layout.styles";
import { Sidebar, Breadcrumb } from "../../components/admin/index";
import useWindowSize from "../../utils/useWindowSize";

const Layout = () => {
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (isOpen) {
      return setIsOpen(false);
    }
  }, [pathname]);
  useEffect(() => {
    if (windowSize > 1059) {
      setIsOpen(true);
    }
  }, [isOpen, windowSize]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Grinergy | Admin`;
  }, []);

  return (
    <L.Background isOpen={isOpen} windowSize={windowSize}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} windowSize={windowSize} />
      {isOpen && windowSize < 1059 && (
        <L.Overlay onClick={() => setIsOpen(false)} />
      )}
      <L.Wrapper>
        <Breadcrumb isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </L.Wrapper>
    </L.Background>
  );
};

export default Layout;
