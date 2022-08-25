import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 8.42592vh;
  position: absolute;
  bottom: 0;
  text-align: center;
`;

const Span = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.95);
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 16px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 13px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Span>copyright &copy; grinergy all rights reserved.</Span>
    </Container>
  );
};

export default Footer;
