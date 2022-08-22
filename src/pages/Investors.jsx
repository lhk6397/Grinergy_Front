import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import InvestorGrid from "../components/InvestorGrid";

const Container = styled.div`
  height: 66.4vh;
  margin-bottom: 129px;
  margin-top: 14.623vh;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 60vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 70.4vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    height: 70.1vh;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 70vh;
  }
`;

const Phrase = styled(motion.h1)`
  font-family: ${(props) => props.theme.font.eng.condensed};
  text-align: center;
  font-size: 120px;
  letter-spacing: -0.015em;
  margin-bottom: -20px;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 2.5rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 2rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 1.4rem;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 113.3%;
  background-color: ${(props) => props.theme.color.green};
  display: flex;
  justify-content: center;
  padding-top: 210px;
  padding-bottom: 179px;

  @media screen and (${(props) => props.theme.size.sm}) {
    height: 119%;
  }
`;

const Investors = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Investors`;
  }, []);
  return (
    <Container>
      <Phrase
      // animate={{
      //   opacity: [1, 0, 1],
      //   transition: { delay: 1, duration: 1.5 },
      // }}
      // initial={{ opacity: 1 }}
      >
        growing together
      </Phrase>
      <Cover>
        <InvestorGrid />
      </Cover>
    </Container>
  );
};

export default Investors;
