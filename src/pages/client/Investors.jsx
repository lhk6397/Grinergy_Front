import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import InvestorGrid from "../../components/InvestorGrid";

const Container = styled(motion.div)`
  margin-top: 8.623vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 15.623vh;
  }
`;

const Phrase = styled(motion.h1)`
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

const Wrapper = styled.div`
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
      transition={{ duration: 0.5 }}
    >
      <Phrase>Growing together</Phrase>
      <Wrapper>
        <InvestorGrid />
      </Wrapper>
      <Cover></Cover>
    </Container>
  );
};

export default Investors;
