import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";
import EnergyData from "../data/EnergyData";
import logo1 from "../assets/images/ourstorylogo1.png";
import logo2 from "../assets/images/ourstorylogo2.png";

const BigWrapper = styled.div`
  width: 53%;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 72%;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 17.87vh;
  background-color: #fff;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.ss}) {
    height: 8.5vh;
  }
`;

const Circle = styled.div`
  width: 17.4vw;
  height: 17.4vw;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${(props) => props.theme.font.kr.medium};
  white-space: pre-wrap;
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 24vw;
    height: 24vw;
  }
`;

const TextCircle = styled(Circle)`
  font-size: 1.5625vw;
  letter-spacing: 0;
  color: rgba(0, 0, 0, 0.6);
  font-family: ${(props) => props.theme.font.eng.condensed};
  strong {
    color: ${(props) => props.theme.color.green};
  }
`;

const ReverseCircle = styled(Circle)`
  background-color: transparent;
  border: 1px solid white;
  color: #fff;
  font-size: 1.302vw;
  letter-spacing: -0.05em;
`;

const CirclesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OutLine = styled(Circle)`
  width: 23.4vw;
  height: 23.4vw;
  padding: 0.1vw;
  border: 1px solid white;
  margin: 0 auto;
  background-color: transparent;
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 30vw;
    height: 30vw;
  }
`;

const BigCircle = styled(Circle)`
  width: 20.4vw;
  height: 20.4vw;
  margin: 0 auto;
  font-size: 1.302vw;
  letter-spacing: -0.05em;
  color: ${(props) => props.theme.color.green};
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 27vw;
    height: 27vw;
  }
`;

const LargeCircle = styled(BigCircle)`
  width: 24.843vw;
  height: 24.843vw;
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 31vw;
    height: 31vw;
  }
`;

const Logo = styled.img`
  width: 60%;
  object-fit: cover;
`;

// const textFadeIn = {
//   hide: (custom) =>
//     custom === "green"
//       ? { color: "rgba(0, 145, 145 ,0.1)" }
//       : { color: "rgba(255, 255, 255 ,0.1)" },
//   show: (custom) =>
//     custom === "green"
//       ? {
//           color: "rgba(0, 145, 145 ,1)",
//           transition: {
//             duration: 0.5,
//           },
//         }
//       : {
//           color: "rgba(255, 255, 255 ,1)",
//           transition: {
//             duration: 0.5,
//           },
//         },
// };

const LoadMap = () => {
  return (
    <BigWrapper>
      <OutLine>
        <BigCircle>그리너지 비전</BigCircle>
      </OutLine>
      <Line></Line>
      <CirclesContainer>
        {EnergyData.map((value, index) => {
          if (index >= 3)
            return <TextCircle key={index}>{Parser(value)}</TextCircle>;
          else {
            return <ReverseCircle key={index}>{value}</ReverseCircle>;
          }
        })}
      </CirclesContainer>
      <Line></Line>
      <LargeCircle>
        <Logo src={logo1}></Logo>
      </LargeCircle>
      <Line></Line>
      <LargeCircle>
        <Logo src={logo2} style={{ width: "35%" }}></Logo>
      </LargeCircle>
    </BigWrapper>
  );
};

export default LoadMap;
