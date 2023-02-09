import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Language = styled.div`
  display: none;
  background-color: #fff;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    font-family: ${(props) => props.theme.font.eng.condensed};
    position: absolute;
    top: 24.55vh;
    right: 0;
  }
`;

const LanKOR = styled.div`
  border: 1px solid #000;
  width: 30px;
  aspect-ratio: 32/28;
  letter-spacing: -0.015em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    position: relative;
    top: 2px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 30px;
    font-size: 10px;
  }
`;

const LanENG = styled(LanKOR)`
  position: absolute;
  top: 26px;
  background-color: #000;
  color: #fff;
  @media screen and (${(props) => props.theme.size.sm}) {
    position: relative;
    top: 0;
  }
`;

const FloatingLanguageBox = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && (
        <Language>
          <LanKOR>
            <span>KOR</span>
          </LanKOR>
          <LanENG>
            <span>ENG</span>
          </LanENG>
        </Language>
      )}
    </>
  );
};

export default FloatingLanguageBox;
