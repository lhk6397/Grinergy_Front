import React from "react";
import styled, { keyframes } from "styled-components";
import icon1 from "../assets/images/icon1-1.png";
import icon2 from "../assets/images/icon1-2.png";
import icon3 from "../assets/images/icon1-3.png";
import icon4 from "../assets/images/icon1-4.png";

const forwardRotate = keyframes`
  from { transform: rotate(0deg), translate(-50% -50%); }
  to { transform: rotate(360deg); }
`;

const reverseRotate = keyframes`
  from { transform: rotate(-0deg); }
  to { transform: rotate(-360deg); }
`;

const Circle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15.63vw;
  height: 15.63vw;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) => props.theme.color.green};
  font-size: 1.4063vw;
  line-height: 1.8583vw;
  letter-spacing: -0.015em;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 30vw;
    height: 30vw;
    font-size: 11.5pt;
    line-height: 14pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 8.5pt;
    line-height: 11pt;
  }
`;

const Icon = styled.img`
  width: 3vw;
  position: absolute;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 7vw;
  }
`;

const OutLine = styled.div`
  position: absolute;
  width: 15.63vw;
  aspect-ratio: 1/1;
  border: 0.3pt solid ${(props) => props.theme.color.green};
  margin: 0 auto;
  background-color: transparent;
  border-radius: 50%;
  font-size: 1.25vw;
  :nth-child(3) {
    animation: ${forwardRotate} 16s linear infinite;
    width: 22.5vw;
    ${Icon} {
      top: -7%;
      left: 42%;
      animation: ${reverseRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 43vw;
      ${Icon} {
        top: -8%;
        left: 39%;
      }
    }
  }
  :nth-child(4) {
    animation: ${reverseRotate} 16s linear infinite;
    width: 29vw;
    ${Icon} {
      top: 45%;
      left: -5%;
      animation: ${forwardRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 56vw;
      ${Icon} {
        top: 42%;
        left: -7%;
      }
    }
  }
  :nth-child(5) {
    animation: ${forwardRotate} 16s linear infinite;
    width: 35.5vw;
    ${Icon} {
      top: 96%;
      left: 45%;
      animation: ${reverseRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 69vw;
      ${Icon} {
        top: 95%;
        left: 43%;
      }
    }
  }
  :nth-child(6) {
    animation: ${reverseRotate} 16s linear infinite;
    width: 42vw;
    ${Icon} {
      top: 44%;
      right: -4%;
      animation: ${forwardRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 82vw;
      ${Icon} {
        top: 45%;
        right: -5%;
      }
    }
  }
`;

const CircleModel = () => {
  return (
    <Circle>
      <span>2??? ??????</span>
      <span>LTO ????????? ??????</span>
      <OutLine>
        <Icon src={icon1} />
      </OutLine>
      <OutLine>
        <Icon src={icon2} />
      </OutLine>
      <OutLine>
        <Icon src={icon3} />
      </OutLine>
      <OutLine>
        <Icon src={icon4} />
      </OutLine>
    </Circle>
  );
};

export default CircleModel;
