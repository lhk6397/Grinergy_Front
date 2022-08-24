import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import batteryImg from "../assets/images/product_battery.jpg";
import leftImg from "../assets/images/product_leftimg.jpg";
import rightImg from "../assets/images/product_rightimg.jpg";

const ProductImg = styled(motion.img)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: filter;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 60vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 30vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    height: 28vh;
  }
`;

const CircleInfo = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 19.27vw;
  height: 19.27vw;
  border: 1px solid #fff;
  font-family: ${(props) => props.theme.font.eng.condensed};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  h1 {
    text-align: center;
    font-size: 35px;
    line-height: 42px;
    letter-spacing: -0.005em;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    width: 25vw;
    height: 25vw;
    h1 {
      font-size: 20px;
      line-height: 27px;
    }
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 20vw;
    height: 20vw;
    h1 {
      font-size: 10px;
      line-height: 17px;
    }
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 25vw;
    height: 25vw;
    h1 {
      line-height: 14px;
    }
  }
`;

const ImgWrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 2px;
  }
`;

const SmallImg = styled(motion.img)`
  width: 100%;
  /* will-change: filter; */
`;

// const imgFadeIn = {
//   dark: { filter: "brightness(0.7)" },
//   bright: { filter: "brightness(1)", transition: { duration: 1 } },
// };

const ProductBigImg = () => {
  // const [banner1Ref, banner1InView] = useInView({ triggerOnce: true });
  // const [banner2Ref, banner2InView] = useInView({ triggerOnce: true });
  // const [banner3Ref, banner3InView] = useInView({ triggerOnce: true });
  return (
    <>
      <motion.div
        style={{ position: "relative" }}
        // ref={banner1Ref}
        // variants={imgFadeIn}
        // animate={banner1InView ? "bright" : "dark"}
        // initial={"dark"}
      >
        <ProductImg src={batteryImg} />
        <CircleInfo>
          <motion.h1
            animate={{
              opacity: [1, 0, 1, 1, 1, 1],
              transition: { duration: 6, repeat: Infinity },
            }}
            initial={{ opacity: 1 }}
          >
            POTERE
            <br />
            S2 Battery
            <br />
            LTO
          </motion.h1>
        </CircleInfo>
      </motion.div>
      <ImgWrapper>
        <SmallImg
          src={leftImg}
          // ref={banner2Ref}
          // variants={imgFadeIn}
          // animate={banner2InView ? "bright" : "dark"}
          // initial={"dark"}
        ></SmallImg>
        <SmallImg
          src={rightImg}
          // ref={banner3Ref}
          // variants={imgFadeIn}
          // animate={banner3InView ? "bright" : "dark"}
          // initial={"dark"}
        ></SmallImg>
      </ImgWrapper>
    </>
  );
};

export default ProductBigImg;
