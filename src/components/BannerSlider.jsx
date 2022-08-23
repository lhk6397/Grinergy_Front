import { motion, AnimatePresence, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInterval from "../utils/useInterval";
import $ from "jquery";

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
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
  font-family: ${(props) => props.theme.font.eng.condensed};
  opacity: 0;
  font-size: 110px;
  letter-spacing: -0.02em;
  line-height: 100px;
  color: #fff;
  z-index: 10;
  h1 {
    text-align: center;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 50px;
    line-height: 40px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 36px;
    line-height: 30px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 25px;
    line-height: 21px;
  }
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
    </Wrapper>
  );
};

export default BannerSlider;
