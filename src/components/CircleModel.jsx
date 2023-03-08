import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import icon1 from "../assets/images/icon1-1.png";
import icon2 from "../assets/images/icon1-2.png";
import icon3 from "../assets/images/icon1-3.png";
import icon4 from "../assets/images/icon1-4.png";
import { LanguageContext } from "../context/LanguageContext";

const forwardRotate = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg); }
`;

const reverseRotate = keyframes`
  from { transform: rotate(-0deg); }
  to { transform: rotate(-360deg); }
`;

const forwardAndScaleAnimation = keyframes`
  0% { transform: rotate(0deg) scale(2);}
  12.5% { transform: rotate(45deg) scale(1);}
  25% { transform: rotate(90deg) scale(1);}
  37.5% { transform: rotate(135deg) scale(1);}
  50% { transform: rotate(180deg) scale(2);}
  62.5% { transform: rotate(225deg) scale(1);}
  75% { transform: rotate(270deg) scale(1);}
  87.5% { transform: rotate(315deg) scale(1);}
  100% { transform: rotate(360deg) scale(2);}
`;

const forwardOpacityAnimation = keyframes`
  0% { opacity: 1; transform: scale(0.65);}
  12.5% {  opacity: 0;}
  25% {  opacity: 0;}
  37.5% {  opacity: 0;}
  50% {  opacity: 1; transform: scale(0.65);}
  62.5% {  opacity: 0;}
  75% {  opacity: 0;}
  87.5% {  opacity: 0;}
  100% {  opacity: 1; transform: scale(0.65);}
`;

const reverseAndScaleAnimation = keyframes`
  0% { transform: rotate(-0deg) scale(1);}
  12.5% { transform: rotate(-45deg) scale(1);}
  25% { transform: rotate(-90deg) scale(2);}
  37.5% { transform: rotate(-135deg) scale(1);}
  50% { transform: rotate(-180deg) scale(1);}
  62.5% { transform: rotate(-225deg) scale(1);}
  75% { transform: rotate(-270deg) scale(2);}
  87.5% { transform: rotate(-315deg) scale(1);}
  100% { transform: rotate(-360deg) scale(1);}
`;

const reverseOpacityAnimation = keyframes`
  0% { opacity: 0;}
  12.5% {  opacity: 0;}
  25% {  opacity: 1; transform: scale(0.65);}
  37.5% {  opacity: 0;}
  50% {  opacity: 0;}
  62.5% {  opacity: 0;}
  75% {  opacity: 1; transform: scale(0.65);}
  87.5% {  opacity: 0;}
  100% {  opacity: 0;}
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
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 30vw;
    height: 30vw;
    font-size: ${(props) => (props.isENG ? "12px" : "11.5pt")};
    line-height: 14pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 8.5pt;
    line-height: 11pt;
  }
`;

const IconDiv = styled.div`
  width: 3vw;
  aspect-ratio: 1/1;
  overflow: visible;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  will-change: transform;
  span {
    position: absolute;
    top: 3vw;
    color: ${(props) => props.theme.color.green};
    font-size: 10px;
    white-space: pre-wrap;
    width: 250%;
    text-align: center;
    line-height: 12px;
    font-family: ${(props) =>
      props.isENG
        ? props.theme.font.eng.condensed
        : props.theme.font.kr.regular};
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 7vw;
    span {
      top: 7vw;
    }
  }
`;

const Icon = styled(motion.img)`
  width: 3vw;
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
  will-change: transform;
  :nth-child(4) {
    animation: ${forwardRotate} 16s linear infinite;
    width: 22.5vw;
    ${IconDiv} {
      top: -7%;
      left: 39%;
      animation: ${reverseAndScaleAnimation} 16s linear infinite;
      span {
        animation: ${reverseOpacityAnimation} 16s linear infinite;
      }
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 43vw;
      ${IconDiv} {
        top: -7%;
        left: 39%;
      }
    }
  }
  :nth-child(5) {
    animation: ${reverseRotate} 16s linear infinite;
    width: 29vw;
    ${IconDiv} {
      top: 45%;
      left: -5%;
      animation: ${forwardAndScaleAnimation} 16s linear infinite;
      span {
        animation: ${forwardOpacityAnimation} 16s linear infinite;
      }
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 56vw;
      ${IconDiv} {
        top: 42%;
        left: -6%;
      }
    }
  }
  :nth-child(6) {
    animation: ${forwardRotate} 16s linear infinite;
    width: 35.5vw;
    ${IconDiv} {
      top: 96%;
      left: 45%;
      animation: ${reverseAndScaleAnimation} 16s linear infinite;
      span {
        animation: ${reverseOpacityAnimation} 16s linear infinite;
      }
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 69vw;
      ${IconDiv} {
        top: 95%;
        left: 43%;
      }
    }
  }
  :last-child {
    animation: ${reverseRotate} 16s linear infinite;
    width: 42vw;
    ${IconDiv} {
      top: 44%;
      right: -4%;
      animation: ${forwardAndScaleAnimation} 16s linear infinite;
      span {
        animation: ${forwardOpacityAnimation} 16s linear infinite;
      }
    }
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 82vw;
      ${IconDiv} {
        top: 45%;
        right: -4%;
      }
    }
  }
`;

const CircleModel = () => {
  const { isENG } = useContext(LanguageContext);
  return (
    <Circle isENG={isENG}>
      <>
        {isENG ? (
          <>
            <span>Advantages</span>
            <span>of secondary battery</span>
            <span>LTO technology</span>
          </>
        ) : (
          <>
            <span>2차 전지</span>
            <span>LTO 기술의 장점</span>
            <span></span>
          </>
        )}
      </>

      <>
        <OutLine>
          <IconDiv isENG={isENG}>
            <Icon src={icon1} />
            <span isENG={isENG}>
              {isENG ? "Extended lifespan" : "연장된 수명"}
            </span>
          </IconDiv>
        </OutLine>
        <OutLine>
          <IconDiv isENG={isENG}>
            <Icon src={icon2} />
            <span isENG={isENG}>
              {isENG ? "Low-temperature\ncharging" : "저온충전 가능"}
            </span>
          </IconDiv>
        </OutLine>
        <OutLine>
          <IconDiv isENG={isENG}>
            <Icon src={icon3} />
            <span isENG={isENG}>
              {isENG ? "Explosive stability" : "폭발 안정성"}
            </span>
          </IconDiv>
        </OutLine>
        <OutLine>
          <IconDiv isENG={isENG}>
            <Icon src={icon4} />
            <span isENG={isENG}>
              {isENG
                ? "Outstanding\nfast charging performance"
                : "급속충전 가능"}
            </span>
          </IconDiv>
        </OutLine>
      </>
    </Circle>
  );
};

export default CircleModel;
