import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import EarthModel from "../components/EarthModel";
import Modal from "../components/Modal";

const Container = styled(motion.div)`
  margin-top: 9.926vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 12.8vh;
  }
`;

const Title = styled(motion.h1)`
  font-size: 20px;
  margin-bottom: 64px;
  text-align: center;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-family: ${(props) => props.theme.font.kr.bold};
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
      <Title
        transition={{ delay: 2, duration: 1 }}
        animate={{ left: 0, opacity: 1 }}
        initial={{ left: 50, opacity: 0 }}
      >
        환경, 혁신, 에너지
        <br />
        그리고 푸른 미래를 향한 그리너지
      </Title>
      <EarthModel />
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
