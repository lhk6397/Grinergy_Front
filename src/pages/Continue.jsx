import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import greeny from "../assets/images/continue_greeny.png";

const Container = styled.div`
  width: 100vw;
  margin-top: 15.55vh;
`;

const Box = styled.div`
  margin: 0 auto;
  margin-bottom: 5.83vh;
  width: 230px;
  height: 48px;
  border: 1px solid #000;
  text-align: center;
  line-height: 48px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 28px;
  letter-spacing: -0.015em;
`;

const Greeny = styled(motion.img)`
  display: block;
  width: 78px;
  height: 138px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 3.7rem;
    height: 6.5rem;
    margin-bottom: 1rem;
  }
`;

const Phrase = styled.h1`
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 98px;
  line-height: 71px;
  letter-spacing: -0.01em;
  text-align: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 2rem;
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
