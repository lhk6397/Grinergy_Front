import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import EarthModel from "../../components/EarthModel";
// import Modal from "../components/global/Modal";
import mainVideo from "../../assets/videos/main.mp4";
import { LanguageContext } from "../../context/LanguageContext";

const Container = styled(motion.div)`
  position: relative;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 12.8vh;
  }
`;

const MainVideo = styled.video`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const Title = styled(motion.h1)`
  position: absolute;
  color: #fff;
  top: 28vh;
  font-size: 40px;
  margin-bottom: 64px;
  left: 14vw;
  /* line-height: 28px; */
  letter-spacing: -0.015em;
  z-index: 99;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.bold};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15pt;
    line-height: 20pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 15px;
    line-height: 30px;
  }
`;

const Home = () => {
  const { isENG } = useContext(LanguageContext);
  // const [openModal, setOpenModal] = useState(true);
  // const [hasCookie, setHasCookie] = useState(true);
  // const [appCookies, setAppCookies] = useCookies();

  // const getExpiredDate = (days) => {
  //   const date = new Date();
  //   date.setDate(date.getDate() + days);
  //   return date;
  // };

  // const closeModalUntilExpires = () => {
  //   // 오늘 하루 더 이상 보지 않기
  //   if (!appCookies) return;
  //   const expires = getExpiredDate(1);
  //   setAppCookies("MODAL_EXPIRES", true, { path: "/", expires });
  //   setOpenModal(false);
  // };

  // useEffect(() => {
  //   // 쿠키 유무에 따라
  //   if (appCookies["MODAL_EXPIRES"]) return;
  //   setHasCookie(false);
  // }, [appCookies]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `GRINERGY`;
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <MainVideo autoPlay muted playsInline loop>
        <source src={mainVideo} type="video/mp4" />
      </MainVideo>
      <>
        {isENG ? (
          <Title
            transition={{ delay: 2, duration: 1 }}
            animate={{ left: "14vw", opacity: 1 }}
            initial={{ left: 50, opacity: 0 }}
            isENG={isENG}
          >
            Environment, Innovation, Energy,
            <br />
            And Grinergy for the Green Future
          </Title>
        ) : (
          <Title
            transition={{ delay: 2, duration: 1 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            환경, 혁신, 에너지
            <br />
            그리고 푸른 미래를 향한
            <br />
            그리너지
          </Title>
        )}
      </>
      {/* <EarthModel /> */}
      {/* {openModal && !hasCookie && (
        <Modal
          closeModal={() => setOpenModal(false)}
          closeModalUntilExpires={closeModalUntilExpires}
        />
      )} */}
    </Container>
  );
};
export default Home;
