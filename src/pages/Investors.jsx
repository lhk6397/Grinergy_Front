import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import InvestorGrid from "../components/InvestorGrid";

const Container = styled(motion.div)`
  margin-top: 8.623vh;
  /*@media screen and (${(props) => props.theme.size.md}) {
    height: 55vw;
    margin-bottom: 16.203vh;
  }*/
  /* @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 17.623vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-top: 18.623vh;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    margin-top: 17.423vh;
  } */
`;

const Phrase = styled(motion.h1)`
  font-family: ${(props) => props.theme.font.eng.condensed};
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  margin-bottom: -1.1vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13vw;
    margin-bottom: -2.5vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 57.6vh;
  background-color: ${(props) => props.theme.color.green};

  /* @media screen and (${(props) => props.theme.size.lg}) {
    height: 78vh;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    height: 100vh;
  } */
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 66vh;
  }
  /* display: flex;
  justify-content: center;
  padding-top: 19.444vh;
  padding-bottom: 16.574vh;

  @media screen and (${(props) => props.theme.size.md}) {
    height: 130.3%;
    padding-top: 50px;
    padding-bottom: 51vh;
  }

  @media screen and (${(props) => props.theme.size.sm}) {
    height: 113.3%;
    padding-top: 70px;
    padding-bottom: 20vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    height: 120%;
    padding-bottom: 20vh;
  } */
`;

const Cover = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${(props) => props.theme.color.green};
  height: 50vh;
  bottom: 0;
  z-index: -1;
`;

const Investors = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Investors`;
  }, []);
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 1 }}
    >
      <Phrase
      // animate={{
      //   opacity: [1, 0, 1],
      //   transition: { delay: 1, duration: 1.5 },
      // }}
      // initial={{ opacity: 1 }}
      >
        growing together
      </Phrase>
      <Wrapper>
        <InvestorGrid />
      </Wrapper>
      <Cover></Cover>
    </Container>
  );
};

export default Investors;
