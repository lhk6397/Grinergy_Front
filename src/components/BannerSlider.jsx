import { motion, useAnimation } from "framer-motion";
import ImageList from "../data/ImageList";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInterval from "../utils/useInterval";
import $ from "jquery";

const SlideWrap = styled.div`
  width: 93%;
  overflow: hidden;
  display: block;
  margin: 0 auto;
`;

const SlideList = styled(motion.ul)`
  white-space: nowrap;
  position: relative;
`;

const SlideItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  will-change: transform;
  transition: all 1s;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  z-index: -1;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 30vh;
  }
`;

const Title = styled(motion.h1)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: ${(props) => props.theme.font.eng.condensed};
  opacity: 0;
  font-size: 5vw;
  letter-spacing: -0.02em;
  line-height: 4.7vw;
  color: #fff;
  text-align: center;
  z-index: 10;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 33pt;
    line-height: 28pt;
  }
`;

const BannerSlider = () => {
  const [index, setIndex] = useState(0);
  const titleAnimation = useAnimation();

  useEffect(() => {
    $(".title").css({ opacity: "0" });
    $(".slideItem").css("transform", `translateX(${index * -100}%)`);
    titleAnimation.start({ opacity: [0, 1], x: ["50%", "-50%"] });
  }, [index, titleAnimation]);

  useInterval(() => {
    setIndex((prev) => (prev === 4 ? 0 : prev + 1));
  }, 4000);

  return (
    <>
      <SlideWrap>
        <SlideList>
          {ImageList.map((item, index) => (
            <SlideItem key={index} className="slideItem">
              <Wrapper>
                <Banner src={item.src} />
                <Title
                  className={"title"}
                  transition={{ delay: 1 }}
                  initial={{ y: "-50%" }}
                  animate={titleAnimation}
                >
                  {item.title1}
                  <br />
                  {item.title2}
                </Title>
              </Wrapper>
            </SlideItem>
          ))}
        </SlideList>
      </SlideWrap>
    </>
  );
};

export default BannerSlider;
