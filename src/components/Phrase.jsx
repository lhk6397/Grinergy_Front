import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../context/LanguageContext";

const StyledPhrase = styled.h1`
  width: fit-content;
  margin-left: 31vw;
  font-size: 6.25vw;
  line-height: 6.5vw;
  letter-spacing: ${(props) => (props.isProductPage ? "-0.065em" : "-0.03em")};
  margin-bottom: 2.2407vh;
  text-align: left;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 0 auto;
    font-size: 7.9vw;
    line-height: 35px;
    margin-bottom: 8vh;
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
