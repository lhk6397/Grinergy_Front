import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import EnergyData from "../data/EnergyData";
import logo1 from "../assets/images/ourstorylogo1.png";
import logo2 from "../assets/images/ourstorylogo2.png";

const BigWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Line = styled.div`
  width: 2px;
  height: 10.4vw;
  background-color: #fff;
  margin: 0 auto;
`;

const Circle = styled(motion.div)`
  font-size: 1.458vw;
  width: 17.7vw;
  height: 17.7vw;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.green};
  text-align: center;
`;

const ReverseCircle = styled(Circle)`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
`;

const CirclesContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OutLine = styled(Circle)`
  width: 23.4vw;
  height: 23.4vw;
  padding: 0.1vw;
  border: 1px solid #fff;
  margin: 0 auto;
  background-color: transparent;
`;

const BigCircle = styled(Circle)`
  width: 21vw;
  height: 21vw;
  margin: 0 auto;
`;

const Logo = styled(motion.img)`
  width: 50%;
  object-fit: cover;
`;

// const pseudo = {
//   start: { opacity: 1 },
//   end: { opacity: 1, transition: { taggerChildren: 0.5 } },
// };

const textFadeIn = {
  hide: (custom) =>
    custom === "green"
      ? { color: "rgba(0, 145, 145 ,0.1)" }
      : { color: "rgba(255, 255, 255 ,0.1)" },
  show: (custom) =>
    custom === "green"
      ? {
          color: "rgba(0, 145, 145 ,1)",
          transition: {
            duration: 0.5,
          },
        }
      : {
          color: "rgba(255, 255, 255 ,1)",
          transition: {
            duration: 0.5,
          },
        },
};

const fadeIn = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

const LoadMap = () => {
  const [text1Ref, text1InView] = useInView({ triggerOnce: true });
  const [text2Ref, text2InView] = useInView({ triggerOnce: true });
  const [text3Ref, text3InView] = useInView({ triggerOnce: true });
  const [text4Ref, text4InView] = useInView({ triggerOnce: true });

  return (
    <BigWrapper>
      <OutLine>
        <BigCircle
          ref={text1Ref}
          custom={"green"}
          variants={textFadeIn}
          animate={text1InView ? "show" : "hide"}
          initial={"hide"}
        >
          그리너지 비전
        </BigCircle>
      </OutLine>
      <Line></Line>
      <CirclesContainer>
        {EnergyData.map((value, index) => {
          if (index >= 3)
            return (
              <Circle
                ref={text2Ref}
                custom={"green"}
                key={index}
                variants={textFadeIn}
                initial={"hide"}
                animate={text2InView ? "show" : "hide"}
              >
                {value}
              </Circle>
            );
          else {
            return (
              <ReverseCircle
                ref={text2Ref}
                custom={"white"}
                key={index}
                variants={textFadeIn}
                initial={"hide"}
                animate={text2InView ? "show" : "hide"}
              >
                {value}
              </ReverseCircle>
            );
          }
        })}
      </CirclesContainer>
      <Line></Line>
      <BigCircle>
        <Logo
          ref={text3Ref}
          variants={fadeIn}
          animate={text3InView ? "show" : "hide"}
          initial={"hide"}
          src={logo1}
        ></Logo>
      </BigCircle>
      <Line></Line>
      <BigCircle>
        <Logo
          ref={text4Ref}
          variants={fadeIn}
          animate={text4InView ? "show" : "hide"}
          initial={"hide"}
          src={logo2}
        ></Logo>
      </BigCircle>
    </BigWrapper>
  );
};

export default LoadMap;
