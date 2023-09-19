import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  margin-top: 10vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 0;
    margin-bottom: 2vh;
  }
`;

export const MainVideo = styled.video`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  top: 10vh;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  @media screen and (${(props) => props.theme.size.sm}) {
    top: 0;
  }
`;

export const Title = styled(motion.h1)`
  position: absolute;
  color: #fff;
  top: 16vw;
  font-size: ${(props) => (props.isENG ? "45px" : "43px")};
  left: 14vw;
  letter-spacing: -0.015em;
  line-height: ${(props) => (props.isENG ? "48px" : "60px")};
  z-index: 9;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.bold};
  @media screen and (${(props) => props.theme.size.sm}) {
    top: 43vh;
    left: ${(props) => (props.isENG ? "19vw" : "25vw")};
    font-size: ${(props) => (props.isENG ? "26pt" : "22pt")};
    line-height: ${(props) => (props.isENG ? "30pt" : "34pt")};
    letter-spacing: ${(props) => props.isENG && "0em"};
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    left: 23vw;
    font-size: ${(props) => (props.isENG ? "20px" : "22px")};
    line-height: ${(props) => (props.isENG ? "24px" : "30px")};
  }
`;

export const GoodDesignLogo = styled(motion.img)`
  position: absolute;
  bottom: 8vw;
  left: 14vw;
  height: 2.5vw;
  object-fit: contain;

  @media screen and (${(props) => props.theme.size.sm}) {
    height: 4.5vh;
    bottom: 10vh;
    left: ${(props) => (props.isENG ? "19vw" : "25vw")};
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    left: 23vw;
    height: 4vh;
  }
`;
