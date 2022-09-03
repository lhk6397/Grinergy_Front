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
  font-family: ${(props) => props.theme.font.kr.medium};
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 35vw;
    height: 35vw;
    font-size: 13.5pt;
    line-height: 16pt;
  }
`;

const Icon = styled.img`
  width: 3vw;
  position: absolute;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 10vw;
  }
`;

const OutLine = styled.div`
  position: absolute;
  width: 15.63vw;
  aspect-ratio: 1/1;
  border: 0.75pt solid ${(props) => props.theme.color.green};
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
      width: 48vw;
      ${Icon} {
        top: -10%;
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
      width: 61vw;
      ${Icon} {
        top: 42%;
        left: -8%;
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
      width: 74vw;
      ${Icon} {
        top: 93%;
        left: 43%;
      }
    }
  }
  :nth-child(6) {
    animation: ${reverseRotate} 16s linear infinite;
    width: 42vw;
    ${Icon} {
      top: 44%;
      right: -6%;
      animation: ${forwardRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 87vw;
      ${Icon} {
        top: 45%;
        right: -7%;
      }
    }
  }
`;

const CircleModel = () => {
  return (
    <Circle>
      <span>2차 전지</span>
      <span>LTO 기술의 장점</span>
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
