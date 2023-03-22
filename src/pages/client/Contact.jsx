import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { LanguageContext } from "../../context/LanguageContext";
import Moment from "react-moment";
import useInterval from "../../utils/useInterval";
import "moment/locale/fr";
import "moment-timezone";

const Container = styled(motion.div)`
  margin-top: 16.55vh;
  margin-bottom: 4.1666vh;
  width: 100%;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 2vh;
  }
`;

const Wrapper = styled.div`
  width: fit-content;
  margin-left: 31vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 0 auto;
  }
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
    margin-left: 20vw;
    flex-direction: column;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-left: 16vw;
  }
`;

const ContactNum = styled.span`
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 1.5vw;
  letter-spacing: 0.01em;
  margin-top: 3vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 17pt;
    margin-bottom: 0;
    font-size: 13.5pt;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin-bottom: 10vh;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    display: flex;
    flex-direction: column;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  :first-child {
    position: relative;
    top: 2%;
    @media screen and (${(props) => props.theme.size.sm}) {
      margin-bottom: 20px;
      div {
        display: flex;
        gap: 10px;
      }
    }
  }
`;

const SPAN = styled.span`
  margin-bottom: 1vh;
  font-family: ${(props) =>
    props.eng ? props.theme.font.eng.condensed : props.theme.font.kr.medium};
  font-size: ${(props) => (props.eng ? "1.4vw" : "1.25vw")};
  letter-spacing: ${(props) => !props.eng && "-0.03em"};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: ${(props) => (props.eng ? "13pt" : "10.5pt")};
    margin-bottom: 2.5px;
  }
`;

const ENGSPAN = styled(SPAN)`
  font-family: ${(props) => props.theme.font.eng.bold};
  letter-spacing: 0em;
`;

const Country = styled(ENGSPAN)`
  text-decoration: underline;
  font-size: 1.4vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
  }
`;

const Purpose = styled(ENGSPAN)`
  font-size: 1.4vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
  }
`;

const blinkEffect = keyframes` 
  50% {
    opacity: 0;
  }
`;

const Time = styled(ENGSPAN)`
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 3px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  span {
    animation: ${blinkEffect} 1.5s step-end infinite;
    position: relative;
    bottom: 2px;
  }
  time {
    letter-spacing: -0.03em;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
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
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <Country>SEOUL</Country>
                  <Purpose>Headquarters</Purpose>
                  <Time>
                    <Moment format="hh" tz="Asia/Seoul">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="Asia/Seoul">
                      {currTime}
                    </Moment>
                  </Time>
                </>
              ) : (
                <>
                  <div>
                    <Country>SEOUL</Country>
                    <Time>
                      <Moment format="hh" tz="Asia/Seoul">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="Asia/Seoul">
                        {currTime}
                      </Moment>
                    </Time>
                  </div>
                  <Purpose>Headquarters</Purpose>
                </>
              )}
            </Box>
            <Box>
              {!isENG && <SPAN eng={false}>서울특별시 금천구</SPAN>}
              {isENG ? (
                <SPAN eng>205-27, Gasan Digital 1-ro,</SPAN>
              ) : (
                <SPAN eng={false}>가산 디지털 1로 205-27</SPAN>
              )}

              {isENG ? (
                <SPAN eng>Gasan Al tower 402</SPAN>
              ) : (
                <SPAN eng={false}>가산 Al 타워 402호</SPAN>
              )}

              <Email>info@grinergy.co.kr</Email>
              <ContactNum>+82. 2. 587.7127</ContactNum>
            </Box>
          </Row>

          <Row>
            <Box>
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <Country>US</Country>
                  <Purpose>Business office</Purpose>
                  <Time>
                    <Moment format="hh" tz="America/Los_Angeles">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="America/Los_Angeles">
                      {currTime}
                    </Moment>
                  </Time>
                </>
              ) : (
                <>
                  <div>
                    <Country>US</Country>
                    <Time>
                      <Moment format="hh" tz="America/Los_Angeles">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="America/Los_Angeles">
                        {currTime}
                      </Moment>
                    </Time>
                  </div>
                  <Purpose>Business office</Purpose>
                </>
              )}
            </Box>
            <Box>
              <SPAN eng>3003 N. 1st st, #305,</SPAN>
              <SPAN eng>San Jose, CA 95134</SPAN>
              <Email>dsoutherton@grinergy.co.kr</Email>
              <ContactNum>+1. 310. 866. 3777</ContactNum>
            </Box>
          </Row>

          <Row>
            <Box>
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <Country>US</Country>
                  <Purpose>R&D lab</Purpose>
                  <Time>
                    <Moment format="hh" tz="America/New_York">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="America/New_York">
                      {currTime}
                    </Moment>
                  </Time>
                </>
              ) : (
                <>
                  <div>
                    <Country>US</Country>
                    <Time>
                      <Moment format="hh" tz="America/New_York">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="America/New_York">
                        {currTime}
                      </Moment>
                    </Time>
                  </div>
                  <Purpose>R&D lab</Purpose>
                </>
              )}
            </Box>
            <Box>
              <SPAN eng>1395 Main st, second floor,</SPAN>
              <SPAN eng>Waltham, MA 02451</SPAN>
              <Email>mdcho@grinergy.co.kr</Email>
            </Box>
          </Row>

          <Row>
            <Box>
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <Country>FINLAND</Country>
                  <Purpose>GRINERGY smart oy</Purpose>
                  <Time>
                    <Moment format="hh" tz="Europe/Helsinki">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="Europe/Helsinki">
                      {currTime}
                    </Moment>
                  </Time>
                </>
              ) : (
                <>
                  <div>
                    <Country>FINLAND</Country>
                    <Time>
                      <Moment format="hh" tz="Europe/Helsinki">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="Europe/Helsinki">
                        {currTime}
                      </Moment>
                    </Time>
                  </div>
                  <Purpose>GRINERGY smart oy</Purpose>
                </>
              )}
            </Box>
            <Box>
              <SPAN eng>Salomonkatu 17A third floor,</SPAN>
              <SPAN eng>00100 Helsinki</SPAN>
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
