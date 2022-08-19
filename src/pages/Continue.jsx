import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import greeny from "../assets/images/continue_greeny.png";

const Container = styled.div`
  width: 100vw;
  padding-top: 2.5rem;
`;

const Box = styled.div`
  margin: 0 auto;
  margin-bottom: 18vh;
  width: 10.5rem;
  height: 2.5rem;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Greeny = styled(motion.img)`
  display: block;
  width: 5rem;
  height: 8.75rem;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 3.7rem;
    height: 6.5rem;
    margin-bottom: 1rem;
  }
`;

const Phrase = styled.h1`
  font-size: 5rem;
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
