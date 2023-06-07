import React, { useContext, useEffect } from "react";

import * as H from "../../styles/client/history.styles";
import HistoryList from "../../data/HistoryList";
import historyCoverImg from "../../assets/images/historyCoverImg.jpg";
import { Banner, Phrase, HistoryItem } from "../../components";
import { LanguageContext } from "../../context/LanguageContext";

const History = () => {
  const { isENG } = useContext(LanguageContext);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `History`;
  }, []);

  return (
    <H.Container
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
              development for change
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

      <Banner src={historyCoverImg} isHistoryPage />

      <H.SmallPhrase isENG={isENG}>
        {isENG
          ? "Green steps for humanity and the environment"
          : "인간과 환경을 위한 푸른 도약"}
      </H.SmallPhrase>
      <H.HistoryItemList>
        {HistoryList.map((historyItem, index) => (
          <HistoryItem key={index} data={historyItem} />
        ))}
      </H.HistoryItemList>
    </H.Container>
  );
};

export default History;
