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

const Container = styled.div`
  margin: 15vw 0;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 50vw;
  }
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
  font-size: 27px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-family: ${(props) => props.theme.font.kr.medium};
  @media screen and (${(props) => props.theme.size.md}) {
    width: 30vw;
    height: 30vw;
    font-size: 15px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
  }
`;

const Icon = styled.img`
  width: 3vw;
  position: absolute;
`;

const OutLine = styled.div`
  position: absolute;
  width: 15.63vw;
  height: 15.63vw;
  border: 1px solid ${(props) => props.theme.color.green};
  margin: 0 auto;
  background-color: transparent;
  border-radius: 50%;
  font-size: 1.25vw;
  :nth-child(3) {
    animation: ${forwardRotate} 16s linear infinite;
    width: 22.5vw;
    height: 22.5vw;
    ${Icon} {
      top: -7%;
      left: 42%;
      animation: ${reverseRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.md}) {
      width: 36.5vw;
      height: 36.5vw;
      ${Icon} {
        top: -4%;
        left: 45%;
      }
    }
  }
  :nth-child(4) {
    animation: ${reverseRotate} 16s linear infinite;
    width: 29vw;
    height: 29vw;
    ${Icon} {
      top: 45%;
      left: -5%;
      animation: ${forwardRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.md}) {
      width: 43vw;
      height: 43vw;
      ${Icon} {
        top: 45%;
        left: -4%;
      }
    }
  }
  :nth-child(5) {
    animation: ${forwardRotate} 16s linear infinite;
    width: 35.5vw;
    height: 35.5vw;
    ${Icon} {
      top: 96%;
      left: 45%;
      animation: ${reverseRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.md}) {
      width: 49.5vw;
      height: 49.5vw;
      ${Icon} {
        top: 97%;
        left: 47%;
      }
    }
  }
  :nth-child(6) {
    animation: ${reverseRotate} 16s linear infinite;
    width: 42vw;
    height: 42vw;
    ${Icon} {
      top: 45%;
      right: -4%;
      animation: ${forwardRotate} 16s linear infinite;
    }
    @media screen and (${(props) => props.theme.size.md}) {
      width: 56vw;
      height: 56vw;
      ${Icon} {
        top: 45%;
        right: -3%;
      }
    }
  }
`;

const CircleModel = () => {
  return (
    <Container>
      <Circle>
        <span>2차전지</span>
        <span>LTO기술의 장점</span>
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
    </Container>
  );
};

export default CircleModel;
