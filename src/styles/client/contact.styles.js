import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const Container = styled(motion.div)`
  margin-top: 16.55vh;
  margin-bottom: 4.1666vh;
  width: 100%;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 2vh;
  }
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin-left: 31vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 0 auto;
  }
`;

export const Phrase = styled(motion.h1)`
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  margin-bottom: 17.592vh;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13.2vw;
    margin-bottom: 8vh;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: fit-content;
    margin-left: 20vw;
    flex-direction: column;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-left: 16vw;
  }
`;

export const ContactNum = styled.span`
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 1.5vw;
  letter-spacing: 0.01em;
  margin-top: 3vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 17pt;
    margin-bottom: 0;
    font-size: 13.5pt;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin-bottom: 10vh;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  :first-child {
    position: relative;
    top: 2%;
    @media screen and (${(props) => props.theme.size.sm}) {
      margin-bottom: 20px;
      div {
        display: flex;
        gap: 10px;
      }
    }
  }
`;

export const SPAN = styled.span`
  margin-bottom: 1vh;
  font-family: ${(props) =>
    props.eng ? props.theme.font.eng.condensed : props.theme.font.kr.medium};
  font-size: ${(props) => (props.eng ? "1.4vw" : "1.25vw")};
  letter-spacing: ${(props) => !props.eng && "-0.03em"};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: ${(props) => (props.eng ? "13pt" : "10.5pt")};
    margin-bottom: 2.5px;
  }
`;

export const ENGSPAN = styled(SPAN)`
  font-family: ${(props) => props.theme.font.eng.bold};
  letter-spacing: 0em;
`;

export const Country = styled(ENGSPAN)`
  text-decoration: underline;
  font-size: 1.4vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
  }
`;

export const Purpose = styled(ENGSPAN)`
  font-size: 1.4vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
  }
`;

export const blinkEffect = keyframes` 
  50% {
    opacity: 0;
  }
`;

export const Time = styled(ENGSPAN)`
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 3px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  span {
    animation: ${blinkEffect} 1.5s step-end infinite;
    position: relative;
    bottom: 2px;
  }
  time {
    letter-spacing: -0.03em;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
  }
`;

export const Email = styled.span`
  font-family: ${(props) => props.theme.font.eng.bold};
  font-size: 1.5vw;
  letter-spacing: 0.01em;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13.5pt;
  }
`;
