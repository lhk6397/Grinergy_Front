import React, { useContext, useEffect } from "react";

import * as H from "../../styles/client/home.styles";
import mainVideo from "../../assets/videos/main.mp4";
import { LanguageContext } from "../../context/LanguageContext";

const Home = () => {
  const { isENG } = useContext(LanguageContext);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `GRINERGY`;
  }, []);

  return (
    <H.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <H.MainVideo autoPlay muted playsInline loop>
        <source src={mainVideo} type="video/mp4" />
      </H.MainVideo>
      <>
        {isENG ? (
          <H.Title
            transition={{ delay: 2, duration: 1 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            isENG={isENG}
          >
            {window.matchMedia("(orientation: portrait)").matches ? (
              <>
                Environment
                <br />
                Innovation, Energy
                <br />
                and Grinergy
                <br />
                for the Green Future
              </>
            ) : (
              <>
                Environment, Innovation, Energy,
                <br />
                and Grinergy
                <br />
                for the Green Future
              </>
            )}
          </H.Title>
        ) : (
          <H.Title
            isENG={isENG}
            transition={{ delay: 2, duration: 1 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            환경, 혁신, 에너지
            <br />
            그리고 푸른 미래를
            <br />
            향한 그리너지
          </H.Title>
        )}
      </>
    </H.Container>
  );
};
export default Home;
