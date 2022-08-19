import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 9.25vh;
  text-align: center;
  height: 10vh;
`;

const Span = styled.span`
  font-size: 18px;
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
    font-family: ${(props) => props.theme.font.kr.medium};
    font-size: 10px;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Span>&copy;grinergy all rights reserved.</Span>
    </Container>
  );
};

export default Footer;
