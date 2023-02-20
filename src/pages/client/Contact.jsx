import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/LanguageContext";
import Moment from "react-moment";
import useInterval from "../../utils/useInterval";
import "moment/locale/fr";
import "moment-timezone";

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
  :last-child {
    margin-bottom: 4.1666vh;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  :first-child {
    position: relative;
    top: 4%;
  }
`;

const SPAN = styled.span`
  margin-bottom: 1vh;
  font-family: ${(props) =>
    props.eng ? props.theme.font.eng.condensed : props.theme.font.kr.medium};
  font-size: 1.4vw;
  letter-spacing: ${(props) => !props.eng && "-0.03em"};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
    margin-bottom: 5pt;
  }
`;

const ENGSPAN = styled(SPAN)`
  font-family: ${(props) => props.theme.font.eng.bold};
  letter-spacing: 0em;
`;

const Country = styled(ENGSPAN)`
  letter-spacing: 0em;
  text-decoration: underline;
`;

const Purpose = styled(ENGSPAN)``;

const Time = styled(ENGSPAN)`
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
  const [currTime, setCurrTime] = useState(Date.now());

  useInterval(() => {
    setCurrTime(Date.now());
  }, 3000);

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
              <Time>
                <Moment format="hh:mm a" tz="Asia/Seoul">
                  {currTime}
                </Moment>
              </Time>
            </Box>
            <Box>
              {!isENG && <SPAN eng={false}>서울특별시 금천구</SPAN>}
              {isENG ? (
                <SPAN eng>205-27, Gasan digital 1-ro,</SPAN>
              ) : (
                <SPAN eng={false}>가산 디지털 1로 205-27</SPAN>
              )}

              {isENG ? (
                <SPAN eng>gasan Al tower 402</SPAN>
              ) : (
                <SPAN eng={false}>가산 Al 타워 402호</SPAN>
              )}

              <Email>info@grinergy.co.kr</Email>
              <ContactNum>+82. 2. 587.7127</ContactNum>
            </Box>
          </Row>

          <Row>
            <Box>
              <Country>US</Country>
              <Purpose>Business office</Purpose>
              <Time>
                <Moment format="hh:mm a" tz="America/Los_Angeles">
                  {currTime}
                </Moment>
              </Time>
            </Box>
            <Box>
              <SPAN eng>3003 N. 1st st, #305,</SPAN>
              <SPAN eng>san jose, CA 95134</SPAN>
              {!isENG && <SPAN eng={false}>가산 Al 타워 402호</SPAN>}
              <Email>dsoutherton@grinergy.co.kr</Email>
              <ContactNum>+1. 310. 866. 3777</ContactNum>
            </Box>
          </Row>

          <Row>
            <Box>
              <Country>US</Country>
              <Purpose>R&D lab</Purpose>
              <Time>
                <Moment format="hh:mm a" tz="America/New_York">
                  {currTime}
                </Moment>
              </Time>
            </Box>
            <Box>
              <SPAN eng>1395 Main st, second floor,</SPAN>
              <SPAN eng>waltham, MA 02451</SPAN>
              <Email>mdcho@grinergy.co.kr</Email>
            </Box>
          </Row>

          <Row>
            <Box>
              <Country>FINLAND</Country>
              <Purpose>GRINERGY smart oy</Purpose>
              <Time>
                <Moment format="hh:mm a" tz="Europe/Helsinki">
                  {currTime}
                </Moment>
              </Time>
            </Box>
            <Box>
              <SPAN eng>Salomonkatu 17A third floor,</SPAN>
              <SPAN eng>00100 helsinki</SPAN>
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
