import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
const MarginBottom = styled.div`
  padding-bottom: 5.42592vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 4vh;
  }
`;

const Container = styled.div`
  width: 100%;
  transition: all ease-in-out 0.5s;
  height: 5.42592vh;
  position: absolute;
  bottom: 0;
  text-align: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 4vh;
  }
`;

const Span = styled.span`
  font-size: 10px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.95);
`;

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes("admin") && (
        <>
          <MarginBottom />
          <Container
            style={{
              backgroundColor:
                pathname === "/investors" ? "rgba(0, 145, 145)" : "transparent",
            }}
          >
            <Span>Copyright 2023 &copy; GRINERGY all rights reserved.</Span>
          </Container>
        </>
      )}
    </>
  );
};

export default Footer;
