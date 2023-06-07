import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  margin-top: 8.623vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 15.623vh;
  }
`;

export const Phrase = styled(motion.h1)`
  font-family: ${(props) => props.theme.font.eng.condensed};
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  margin-bottom: -1.2vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13vw;
    margin-bottom: -2.5vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 57.6vh;
  background-color: ${(props) => props.theme.color.green};
  @media screen and (${(props) => props.theme.size.md}) {
    height: 75vh;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 60vh;
  }
`;

export const Cover = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${(props) => props.theme.color.green};
  height: 50vh;
  bottom: 0;
  z-index: -1;
`;
