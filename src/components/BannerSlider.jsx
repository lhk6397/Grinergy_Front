import { motion, AnimatePresence, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import $ from "jquery";

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  will-change: opacity, transform;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 75vw;
  }
`;

const Banner = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Title = styled(motion.div)`
  opacity: 0;
  font-size: 8rem;
  color: #fff;
  z-index: 10;
  h1 {
    text-align: center;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 3rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 2rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 1.6rem;
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
  z-index: 98;
`;

const bannerVariants = {
  initial: { opacity: 0, x: 50 },
  visible: {
    opacity: [0, 1],
    x: [50, 0],
  },
  transition: { duration: 2, delayChildren: 0.5 },
};

const BannerSlider = ({ item }) => {
  const [index, setIndex] = useState(0);
  const bannerAnimation = useAnimation();
  const titleAnimation = useAnimation();

  useEffect(() => {
    $(".title").css({ opacity: "0" });
    bannerAnimation.start("visible");
    titleAnimation.start({ opacity: [0, 1], x: [50, 0] });
  }, [index]);

  useInterval(() => {
    setIndex((prev) => (prev === 4 ? 0 : prev + 1));
  }, 4000);

  return (
    <Wrapper
      variants={bannerVariants}
      animate={bannerAnimation}
      initial={"initial"}
    >
      <Banner src={item[index].src} />
      <Title
        className={"title"}
        transition={{ delay: 1 }}
        animate={titleAnimation}
      >
        <h1>
          {item[index].title1}
          <br />
          {item[index].title2}
        </h1>
      </Title>
      <Overlay></Overlay>
    </Wrapper>
  );
};

export default BannerSlider;
