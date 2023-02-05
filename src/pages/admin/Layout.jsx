import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Siderbar from "../../components/admin/Sidebar";
import Breadcrumb from "../../components/admin/Breadcrumb";
import styled from "styled-components";
import { useEffect } from "react";
import useWindowSize from "../../utils/useWindowSize";

const Background = styled.div`
  background-color: ${(props) => props.theme.color.green};
  opacity: 0.8;
  width: 100%;
  display: flex;
  overflow: hidden;
  height: ${(props) =>
    props.isOpen && props.windowSize < 1059 ? "100vh" : "auto"};
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

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
    <Background isOpen={isOpen} windowSize={windowSize}>
      <Siderbar isOpen={isOpen} setIsOpen={setIsOpen} windowSize={windowSize} />
      {isOpen && windowSize < 1059 && (
        <Overlay onClick={() => setIsOpen(false)} />
      )}
      <Wrapper>
        <Breadcrumb setIsOpen={setIsOpen} />
        <Outlet />
      </Wrapper>
    </Background>
  );
};

export default Layout;
