import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import InvestorGrid from "../components/InvestorGrid";

const Container = styled.div`
  margin-top: 1.623vh;
  /*@media screen and (${(props) => props.theme.size.md}) {
    height: 55vw;
    margin-bottom: 16.203vh;
  }*/
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 17.623vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-top: 18.623vh;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    margin-top: 17.423vh;
  }
`;

const Phrase = styled(motion.h1)`
  font-family: ${(props) => props.theme.font.eng.condensed};
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  margin-bottom: -3.388vh;
  @media screen and (${(props) => props.theme.size.xl}) {
    margin-bottom: -7.388vh;
  }
  @media screen and (${(props) => props.theme.size.lg}) {
    margin-bottom: 0;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    margin-bottom: -7px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 40px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 30px;
    margin-bottom: -5px;
  }
`;

const Cover = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70vh;
  background-color: ${(props) => props.theme.color.green};
  z-index: -1;

  @media screen and (${(props) => props.theme.size.lg}) {
    height: 78vh;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    height: 100vh;
  }
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
      <InvestorGrid />
      <Cover></Cover>
    </Container>
  );
};

export default Investors;
