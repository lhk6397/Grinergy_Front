import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10.55vh;
  width: 100%;
  height: 55vh;
  @media screen and (${(props) => props.theme.size.md}) {
    margin-bottom: 10vw;
  }
`;

const Wrapper = styled.div`
  width: 39vw;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 70vw;
    padding: 0 10vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 90vw;
    padding: 0 10vw;
  }
`;

const Phrase = styled(motion.h1)`
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 6.3vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 8.2vw;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 8.5vw;
  }
`;

const Info = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.size.xs}) {
    flex-wrap: wrap;
    /* justify-content: center; */
  }
`;

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.95);
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 0.8rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 0.6rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 10px;
    margin-bottom: 3rem;
  }
`;

const Address = styled.span`
  margin-bottom: 16.5px;
  font-family: ${(props) => props.theme.font.kr.medium};
  font-size: 22px;
  letter-spacing: -0.05em;
  @media screen and (${(props) => props.theme.size.md}) {
    margin-bottom: 0.4rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-bottom: 0.3rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    margin-bottom: 0.2rem;
  }
`;

const ContactNum = styled.span`
  font-family: ${(props) => props.theme.font.eng.bold};
  font-size: 26px;
  letter-spacing: 0.01em;
  margin-top: 2rem;
  @media screen and (${(props) => props.theme.size.md}) {
    margin-top: 1rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-top: 0.8rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    margin-top: 0.5rem;
  }
`;

const Email = styled.div`
  font-family: ${(props) => props.theme.font.eng.bold};
  font-size: 26px;
  letter-spacing: 0.01em;
  &:first-child {
    font-family: ${(props) => props.theme.font.kr.sm};
  }
  @media screen and (${(props) => props.theme.size.md}) {
    margin-bottom: 0;
    font-size: 0.8rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 0.6rem;
  }
`;

// const info = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.4,
//     },
//   },
// };

// const text = {
//   hidden: { opacity: 0, y: -50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

const Contact = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Contact`;
  }, []);
  return (
    <Container>
      <Wrapper>
        <Phrase
        // animate={{
        //   opacity: [1, 0, 1],
        //   transition: { delay: 1, duration: 1.8 },
        // }}
        // initial={{ opacity: 1 }}
        >
          connect with us
        </Phrase>
        <Info /*variants={info} animate={"show"} initial={"hidden"}*/>
          <Box /*variants={text}*/>
            <Address>서울특별시 금천구</Address>
            <Address>가산 디지털 1로 205-27,</Address>
            <Address>가산 Al 타워 402호</Address>

            <ContactNum>+82-2-587-7127</ContactNum>
          </Box>
          <Box /*variants={text}*/>
            <Email>info@grinergy.co.kr</Email>
          </Box>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Contact;
