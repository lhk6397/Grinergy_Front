import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/LanguageContext";

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
  margin-bottom: 17.592vh;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13.2vw;
    margin-bottom: 8vh;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: fit-content;
    margin: 0 auto;
    flex-direction: column;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin-bottom: 10vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;

const SPAN = styled.span`
  margin-bottom: 1vh;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.medium};
  font-size: 1.4vw;
  letter-spacing: -0.03em;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
    margin-bottom: 5pt;
  }
`;

const Country = styled(SPAN)`
  font-family: ${(props) => props.theme.font.eng.bold};
  text-decoration: underline;
`;

const Purpose = styled(SPAN)`
  font-family: ${(props) => props.theme.font.eng.bold};
`;

const Time = styled(SPAN)`
  font-family: ${(props) => props.theme.font.eng.bold};
  color: rgba(0, 0, 0, 0.5);
`;

const ContactNum = styled.span`
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 1.5vw;
  letter-spacing: 0.01em;
  margin-top: 3vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 17pt 0;
    font-size: 13.5pt;
  }
`;

const Email = styled.span`
  font-family: ${(props) => props.theme.font.eng.bold};
  font-size: 1.5vw;
  letter-spacing: 0.01em;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13.5pt;
  }
`;

const Contact = () => {
  const { isENG } = useContext(LanguageContext);
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
        <Phrase>Connect with us</Phrase>
        <Info>
          <Row>
            <Box>
              <Country>SEOUL</Country>
              <Purpose>Headquarters</Purpose>
              <Time>05 : 30 am</Time>
            </Box>
            <Box>
              {!isENG && <SPAN isENG={isENG}>서울특별시 금천구</SPAN>}
              <SPAN isENG={isENG}>
                {isENG
                  ? "205-27, Gasan digital 1-ro,"
                  : "가산 디지털 1로 205-27,"}
              </SPAN>
              <SPAN isENG={isENG}>
                {isENG ? "gasan Al tower 402" : "가산 Al 타워 402호"}
              </SPAN>
              <Email>info@grinergy.co.kr</Email>
              <ContactNum>+82. 2. 587.7127</ContactNum>
            </Box>
          </Row>

          <Row>
            <Box>
              <Country>US</Country>
              <Purpose>Business office</Purpose>
              <Time>06 : 30 pm</Time>
            </Box>
            <Box>
              <SPAN isENG={isENG}>3003 N. 1st st, #305,</SPAN>
              <SPAN isENG={isENG}>san jose, CA 95134</SPAN>
              {!isENG && <SPAN isENG={isENG}>가산 Al 타워 402호</SPAN>}
              <Email>dsoutherton@grinergy.co.kr</Email>
              <ContactNum>+1. 310. 866. 3777</ContactNum>
            </Box>
          </Row>

          <Row>
            <Box>
              <Country>US</Country>
              <Purpose>R&D lab</Purpose>
              <Time>08 : 30 am</Time>
            </Box>
            <Box>
              <SPAN isENG={isENG}>1395 Main st, second floor,</SPAN>
              <SPAN isENG={isENG}>waltham, MA 02451</SPAN>
              <Email>mdcho@grinergy.co.kr</Email>
            </Box>
          </Row>

          <Row>
            <Box>
              <Country>FINLAND</Country>
              <Purpose>GRINERGY smart oy</Purpose>
              <Time>10 : 30 am</Time>
            </Box>
            <Box>
              <SPAN isENG={isENG}>Salomonkatu 17A third floor,</SPAN>
              <SPAN isENG={isENG}>00100 helsinki</SPAN>
              <Email>shjeon@grinergy.co.kr</Email>
              <ContactNum>+358. 9. 682. 9. 4917</ContactNum>
            </Box>
          </Row>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Contact;
