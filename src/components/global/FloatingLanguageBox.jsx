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
    top: 10.5vh;
    right: 19px;
  }
`;

const LanKOR = styled.div`
  border: 1px solid #000;
  width: 35px;
  aspect-ratio: 32/28;
  letter-spacing: -0.015em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  span {
    position: relative;
    top: 2px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 28px;
    font-size: 12px;
  }
`;

const LanENG = styled(LanKOR)`
  position: relative;
  top: 0;
  background-color: #000;
  color: #fff;
`;

const FloatingLanguageBox = ({ setKorUntilExpires, setEngUntilExpires }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && (
        <Language>
          <LanKOR onClick={setKorUntilExpires}>
            <span>KOR</span>
          </LanKOR>
          <LanENG onClick={setEngUntilExpires}>
            <span>ENG</span>
          </LanENG>
        </Language>
      )}
    </>
  );
};

export default FloatingLanguageBox;
