import React, { useEffect } from "react";
import styled from "styled-components";
import HistoryItem from "../components/HistoryItem";
import HistoryList from "../data/HistoryList";
import historyCoverImg from "../assets/images/historyCoverImg.jpg";
import { Banner } from "../components";

const Container = styled.div`
  margin-bottom: 5rem;
`;

const Phrases = styled.h1`
  width: 38vw;
  margin: 0 auto;
  font-size: 4.6vw;
  margin-bottom: 3rem;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 80%;
    font-size: 8.9vw;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 63%;
    font-size: 7vw;
  }
`;

const SmallPhrase = styled.h3`
  font-size: 33px;
  text-align: center;
  margin: 11.6rem 0 4rem 0;
  color: rgba(0, 0, 0, 0.8);
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 16px;
    margin: 6rem 0 2rem 0;
  }
`;

const HistoryItemList = styled.ul`
  width: 28.646vw;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  @media screen and (${(props) => props.theme.size.md}) {
    width: 70%;
  }
`;

const History = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `History`;
  }, []);

  return (
    <Container>
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
