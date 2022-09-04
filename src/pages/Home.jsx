import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import EarthModel from "../components/EarthModel";

const Container = styled(motion.div)`
  margin-top: 9.926vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 12vh;
  }
`;

const Title = styled(motion.h1)`
  font-size: 20px;
  margin-bottom: 64px;
  text-align: center;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-family: ${(props) => props.theme.font.kr.bold};
  /* @media screen and (${(props) => props.theme.size.xl}) {
    font-size: 24px;
    line-height: 34px;
  } */
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15pt;
    line-height: 24pt;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 18px;
    line-height: 24px;
  } */
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 15px;
    line-height: 30px;
  }
`;

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `GRINERGY`;
  }, []);
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        transition={{ delay: 2, duration: 1 }}
        animate={{ left: 0, opacity: 1 }}
        initial={{ left: 50, opacity: 0 }}
      >
        환경, 혁신, 에너지
        <br />
        그리고 푸른 미래를 향한 그리너지
      </Title>
      <EarthModel />
    </Container>
  );
};
export default Home;
