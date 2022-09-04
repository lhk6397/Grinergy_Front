import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5.42592vh;
  position: absolute;
  bottom: 0;
  text-align: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 4vh;
  }
`;

const Span = styled.span`
  font-size: 14px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.95);
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
  }
`;

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <Container
      style={{
        backgroundColor:
          pathname === "/investors" ? "rgba(0, 145, 145)" : "transparent",
      }}
    >
      <Span>copyright &copy; grinergy all rights reserved.</Span>
    </Container>
  );
};

export default Footer;
