import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  margin-top: 16.55vh;
  width: 100%;
`;

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Phrase = styled(motion.h1)`
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  margin-bottom: 4.63vh;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13.2vw;
    margin-bottom: 2.63vh;
  }
`;

const Info = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: fit-content;
    margin: 0 auto;
    flex-direction: column;
  }
`;

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Address = styled.span`
  margin-bottom: 1.5278vh;
  font-family: ${(props) => props.theme.font.kr.medium};
  font-size: 1.1458vw;
  letter-spacing: -0.05em;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
    margin-bottom: 5pt;
  }
`;

const ContactNum = styled.span`
  font-family: ${(props) => props.theme.font.eng.bold};
  font-size: 1.3542vw;
  letter-spacing: 0.01em;
  margin-top: 4.2593vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 17pt 0;
    font-size: 13.5pt;
  }
`;

const Email = styled.span`
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) => props.theme.font.eng.bold};
  font-size: 1.3542vw;
  letter-spacing: 0.01em;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15pt;
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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
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
          <Email>info@grinergy.co.kr</Email>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Contact;