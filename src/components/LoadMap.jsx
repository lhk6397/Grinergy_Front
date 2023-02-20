import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";
import EnergyData from "../data/EnergyData";
import logo1 from "../assets/images/ourstorylogo1.png";
import logo2 from "../assets/images/ourstorylogo2.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const BigWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 81%;
  }
`;

const Line = styled.div`
  width: 0.5px;
  height: 17.87vh;
  background-color: #fff;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 8.5vh;
  }
`;

const Circle = styled.div`
  width: 11.4vw;
  height: 11.4vw;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  white-space: pre-wrap;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 27vw;
    height: 27vw;
    white-space: normal;
  }
`;

const TextCircle = styled(Circle)`
  font-size: 1.35vw;
  letter-spacing: 0;
  color: rgba(0, 0, 0, 0.6);
  font-family: ${(props) => props.theme.font.eng.condensed};
  strong {
    color: ${(props) => props.theme.color.green};
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 11pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 8pt;
  }
`;

const ReverseCircle = styled(Circle)`
  background-color: transparent;
  border: 0.5px solid white;
  color: #fff;
  font-size: 1.15vw;
  letter-spacing: -0.05em;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10pt;
    border: 0.75px solid white;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 7pt;
  }
`;

const CirclesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OutLine = styled(Circle)`
  width: 16.4vw;
  height: 16.4vw;
  padding: 0.1vw;
  border: 0.5px solid white;
  margin: 0 auto;
  background-color: transparent;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 35vw;
    height: 35vw;
    border: 0.75px solid white;
  }
`;

const BigCircle = styled(Circle)`
  width: 14.4vw;
  height: 14.4vw;
  margin: 0 auto;
  font-size: 1.302vw;
  letter-spacing: -0.05em;
  color: ${(props) => props.theme.color.green};
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 30vw;
    height: 30vw;
    font-size: 10.5pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 7.5pt;
  }
`;

const Logo = styled.img`
  width: 65%;
  object-fit: cover;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 70%;
  }
`;

const LargeCircle = styled(BigCircle)`
  width: 18.843vw;
  height: 18.843vw;
  :last-child {
    ${Logo} {
      width: 40%;
      transform: translateX(7%);
    }
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 34vw;
    height: 34vw;
  }
`;

const LoadMap = () => {
  const { isENG } = useContext(LanguageContext);
  return (
    <BigWrapper>
      <OutLine>
        <BigCircle>{isENG ? "GRINERGY vision" : "그리너지 비전"}</BigCircle>
      </OutLine>
      <Line></Line>
      <CirclesContainer>
        {EnergyData.map((value, index) => {
          if (index >= 3)
            return (
              <TextCircle isENG={isENG} key={index}>
                {Parser(value[0])}
              </TextCircle>
            );
          else {
            return (
              <ReverseCircle isENG={isENG} key={index}>
                {isENG ? value[1] : value[0]}
              </ReverseCircle>
            );
          }
        })}
      </CirclesContainer>
      <Line></Line>
      <LargeCircle>
        <Logo src={logo1}></Logo>
      </LargeCircle>
      <Line></Line>
      <LargeCircle>
        <Logo src={logo2}></Logo>
      </LargeCircle>
    </BigWrapper>
  );
};

export default LoadMap;
