import React from "react";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { LanguageContext } from "../../context/LanguageContext";

const StyledPhrase = styled.h1`
  padding-top: 12.623vh;
  width: fit-content;
  margin-left: 31vw;
  font-size: ${(props) => (props.isENG ? "6vw" : "5vw")};
  line-height: ${(props) => (props.isProductPage ? "6vw" : "5vw")};
  ${(props) =>
    !props.isProductPage
      ? css`
          letter-spacing: ${(props) => (props.isENG ? "-0.01em" : "-0.03em")};
        `
      : css`
          letter-spacing: ${(props) => (props.isENG ? "-0.01em" : "-0.065em")};
        `}
  margin-bottom: 2.2407vh;
  text-align: left;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 0 auto;
    font-size: 8.6vw;
    line-height: ${(props) =>
      props.isENG ? (props.isProductPage ? "36px" : "32px") : "36px"};
    margin-bottom: 7px;
    padding-top: 3vh;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 22px;
  }
`;

const Phrase = ({ isProductPage = false, children }) => {
  const { isENG } = useContext(LanguageContext);
  return (
    <StyledPhrase isProductPage={isProductPage} isENG={isENG}>
      {children}
    </StyledPhrase>
  );
};

export default Phrase;
