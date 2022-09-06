import React, { useEffect } from "react";
import styled from "styled-components";
import HistoryItem from "../components/HistoryItem";
import HistoryList from "../data/HistoryList";
import historyCoverImg from "../assets/images/historyCoverImg.jpg";
import { Banner } from "../components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  margin-top: 19.623vh;
  margin-bottom: 4.1666vh;
  overflow-x: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
`;

const Phrases = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 5.2083vw;
  line-height: 5.9896vw;
  letter-spacing: -0.03em;
  margin-bottom: 2.2407vh;
  text-align: left;
  font-family: ${(props) => props.theme.font.kr.regular};

  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 7.9vw;
    line-height: 35px;
    margin-bottom: 10px;
  }
`;

const SmallPhrase = styled.h3`
  font-size: 1.5104vw;
  letter-spacing: -0.03em;
  text-align: center;
  margin: 17.222vh 0 6.6667vh 0;
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) => props.theme.font.kr.regular};

  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 16px;
    margin: 8vh 0 4.2vh 0;
  }
`;

const HistoryItemList = styled.ul`
  width: 28.646vw;
  margin: 0 auto;
  /* border-top: 1px solid rgba(0, 0, 0, 0.6); */
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 60%;
  }
`;

const History = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `History`;
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <Phrases>
        변화를
        <br />
        위한 혁신과 도약
      </Phrases>

      <Banner src={historyCoverImg} />

      <SmallPhrase>인간과 환경을 위한 푸른 도약</SmallPhrase>
      <HistoryItemList>
        {HistoryList.map((historyItem, index) => (
          <HistoryItem key={index} data={historyItem} />
        ))}
      </HistoryItemList>
    </Container>
  );
};

export default History;
