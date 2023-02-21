import { motion } from "framer-motion";
import ImageList from "../data/ImageList";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BannerWrap = styled(motion.div)`
  width: 92.2%;
  height: 650px;
  display: block;
  margin: 0 auto;
  position: relative;
  will-change: transform;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 30vh;
  }
`;

const Banner = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled(motion.h1)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: ${(props) => props.theme.font.eng.condensed};
  transform: translate(-50%, -50%);
  font-size: 4.7vw;
  letter-spacing: -0.02em;
  line-height: 4.2vw;
  color: #fff;
  z-index: 10;
  text-align: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 18pt;
    line-height: 18pt;
  }
`;

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % ImageList.length);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <>
      <BannerWrap
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {ImageList.map((item, i) => (
          <div key={i}>
            <Banner
              src={item.src}
              animate={{
                opacity: index === i ? 1 : 0,
              }}
              transition={{ duration: 1 }}
              alt={`Image ${index}`}
            />
            <Title
              transition={{ delay: 2, duration: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === i ? [0, 1, 1, 1, 0] : 0 }}
            >
              {item.title1}
              <br />
              {item.title2}
            </Title>
          </div>
        ))}
      </BannerWrap>
    </>
  );
};

export default BannerSlider;
