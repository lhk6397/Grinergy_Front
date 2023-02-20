import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import mainVideo from "../../assets/videos/main.mp4";
import { LanguageContext } from "../../context/LanguageContext";

const Container = styled(motion.div)`
  margin-top: 11vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 12.8vh;
  }
`;

const MainVideo = styled.video`
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
    top: 5vh;
  }
`;

const Title = styled(motion.h1)`
  position: absolute;
  color: #fff;
  top: 16vw;
  font-size: ${(props) => (props.isENG ? "45px" : "43px")};
  left: 14vw;
  letter-spacing: -0.015em;
  line-height: ${(props) => (props.isENG ? "48px" : "60px")};
  z-index: 99;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.bold};
  @media screen and (${(props) => props.theme.size.sm}) {
    top: 43vh;
    left: ${(props) => (props.isENG ? "18vw" : "25vw")};
    font-size: 21pt;
    line-height: ${(props) => (props.isENG ? "26pt" : "28pt")};
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 15px;
    line-height: 30px;
  }
`;

const Home = () => {
  const { isENG } = useContext(LanguageContext);
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
      <MainVideo autoPlay muted playsInline loop>
        <source src={mainVideo} type="video/mp4" />
      </MainVideo>
      <>
        {isENG ? (
          <Title
            transition={{ delay: 2, duration: 1 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            isENG={isENG}
          >
            {window.matchMedia("(orientation: portrait)").matches ? (
              <>
                Environment, Innovation
                <br />
                Energy and Grinergy
                <br />
                for the Green Future
              </>
            ) : (
              <>
                Environment, Innovation, Energy,
                <br />
                and Grinergy
                <br />
                for the Green Future
              </>
            )}
          </Title>
        ) : (
          <Title
            isENG={isENG}
            transition={{ delay: 2, duration: 1 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            환경, 혁신, 에너지
            <br />
            그리고 푸른 미래를
            <br />
            향한 그리너지
          </Title>
        )}
      </>
    </Container>
  );
};
export default Home;
