import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import greeny from "../assets/images/continue_greeny.png";

const Container = styled.div`
  width: 100vw;
  margin-top: 6.55vh;
  /* margin-bottom: 16.94vh; */
`;

const Box = styled.div`
  margin: 0 auto;
  margin-bottom: 4.83vh;
  width: 200px;
  /* height: 48px; */
  aspect-ratio: 230/48;
  border: 1px solid #000;
  text-align: center;
  line-height: 48px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 23px;
  letter-spacing: -0.015em;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 202px;
    font-size: 24px;
    line-height: 42px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 180px;
    font-size: 22px;
    line-height: 38px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 150px;
    font-size: 20px;
    line-height: 31px;
  }
`;

const Greeny = styled(motion.img)`
  display: block;
  width: 70px;
  margin: 0 auto;
  margin-bottom: 18px;
  aspect-ratio: 78 / 138;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 55px;
    margin-bottom: 16px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 50px;
    margin-bottom: 12px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 45px;
    margin-bottom: 12px;
  }
`;

const Phrase = styled.h1`
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 80px;
  line-height: 58px;
  letter-spacing: -0.01em;
  text-align: center;
  @media screen and (${(props) => props.theme.size.sm}) {
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

const Continue = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Continue`;
  }, []);
  return (
    <Container>
      <Box>our new website</Box>
      <Greeny
        transition={{ delay: 1, type: "spring" }}
        animate={{
          y: [0, -30, 0],
        }}
        src={greeny}
      ></Greeny>
      <Phrase>
        under
        <br />
        construction
      </Phrase>
    </Container>
  );
};

export default Continue;
