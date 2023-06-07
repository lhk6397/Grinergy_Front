import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100vw;
  margin-top: 6.55vh;
  @media screen and (${(props) => props.theme.size.md}) {
    margin-top: 13vh;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  margin-bottom: 4.83vh;
  width: 200px;
  aspect-ratio: 230/48;
  border: 1px solid #000;
  text-align: center;
  line-height: 48px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 23px;
  letter-spacing: -0.015em;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 150px;
    font-size: 15px;
    line-height: 30px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 195px;
    font-size: 25px;
    line-height: 48px;
  }
`;

export const Greeny = styled(motion.img)`
  display: block;
  width: 70px;
  margin: 0 auto;
  margin-bottom: 18px;
  aspect-ratio: 78 / 138;

  @media screen and (${(props) => props.theme.size.md}) {
    width: 60px;
    margin-bottom: 20px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 64px;
    margin-bottom: 12px;
  }
`;

export const Phrase = styled.h1`
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 80px;
  line-height: 58px;
  letter-spacing: -0.01em;
  text-align: center;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 67px;
    line-height: 50px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 50px;
    line-height: 40px;
  }

  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 40px;
    line-height: 30px;
  }
`;
