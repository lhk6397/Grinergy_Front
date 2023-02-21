import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import HistoryList from "../../data/HistoryList";
import historyCoverImg from "../../assets/images/historyCoverImg.jpg";
import { Banner, Phrase, HistoryItem } from "../../components";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

const Container = styled(motion.div)`
  margin-top: 19.623vh;
  margin-bottom: 4.1666vh;
  overflow-x: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
`;

const SmallPhrase = styled.h3`
  font-size: 1.5104vw;
  letter-spacing: ${(props) => (props.isENG ? "-0.015em" : "-0.03em")};
  text-align: center;
  margin: 17.592vh 0 6.6667vh 0;
  margin-bottom: ${(props) => props.isENG && "5.667vh"};
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.regular};

  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 16px;
    margin: 8vh 0 1.2vh 0;
  }
`;

const HistoryItemList = styled.ul`
  width: 28.646vw;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 60%;
  }
`;

const History = () => {
  const { isENG } = useContext(LanguageContext);
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
      {isENG ? (
        <Phrase>
          {window.matchMedia("(orientation: landscape)").matches ? (
            <>
              Innovation
              <br />
              and development
              <br />
              for change
            </>
          ) : (
            <>
              Innovation and
              <br />
              Development for Change
            </>
          )}
        </Phrase>
      ) : (
        <Phrase>
          변화를
          <br />
          위한 혁신과 도약
        </Phrase>
      )}

      <Banner src={historyCoverImg} />

      <SmallPhrase isENG={isENG}>
        {isENG
          ? "Green steps for humanity and the environment"
          : "인간과 환경을 위한 푸른 도약"}
      </SmallPhrase>
      <HistoryItemList>
        {HistoryList.map((historyItem, index) => (
          <HistoryItem key={index} data={historyItem} />
        ))}
      </HistoryItemList>
    </Container>
  );
};

export default History;
