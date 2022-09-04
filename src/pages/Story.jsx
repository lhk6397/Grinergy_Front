import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "../components/BannerSlider";
import clip from "../assets/images/promotionClip.mp4";
import human from "../assets/images/human.jpg";
import greeny from "../assets/images/ourstory_greeny.png";
import {
  story1,
  story2,
  story3,
  story4,
  story5,
  story6,
  m_story1,
  m_story2,
  m_story3,
  m_story4,
  m_story5,
  m_story6,
} from "../data/ParagraphData";
import { Banner, LoadMap, Paragraph, VideoClip } from "../components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  margin-top: 19.623vh;
  overflow-x: hidden;
  margin-bottom: 4.1666vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    margin-top: 13vh;
  } */
`;

const Phrases = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 5.2083vw;
  line-height: 5.9896vw;
  letter-spacing: -0.03em;
  margin-bottom: 2.2407vh;
  text-align: left;
  font-family: ${(props) => props.theme.font.kr.regular};

  /* @media screen and (${(props) => props.theme.size.md}) {
    font-size: 6.9vw;
    line-height: 75px;
  } */
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 7.9vw;
    line-height: 35px;
    margin-bottom: 10px;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    line-height: 40px;
    margin-bottom: 15px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 35px;
  } */
`;

const Wrapper = styled.div`
  width: fit-content;
  margin: 17.592vh auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 8vh auto;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    margin: 6.5vh auto;
  } */
`;

const SmallWrapper = styled.div`
  margin-bottom: 8.426vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 46px auto;
  }
`;

const Promotion = styled.div`
  height: 100vh;
  background-color: #040606;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 60vw;
  }
`;

const LoadMapCover = styled.div`
  padding: 17vh 0;
  background-color: ${(props) => props.theme.color.green};
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 8vh 0;
  }
  ${Wrapper} {
    color: #fff;
  }
`;

const Greeny = styled.img`
  width: 6.333vw;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  margin-top: 19.44vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 8vh;
    width: 50px;
  }
`;

const Story = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Our Story`;
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ height: "100vh", opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <Phrases>
        인간과
        <br />
        미래 에너지를 잇다
      </Phrases>

      <Slider />

      <Wrapper>
        <Paragraph
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? story1
              : m_story1
          }
        />
      </Wrapper>

      <Promotion>
        <VideoClip src={clip} />
      </Promotion>

      <Wrapper>
        <SmallWrapper>
          <Paragraph
            data={
              window.matchMedia("(orientation: landscape)").matches
                ? story2
                : m_story2
            }
          />
        </SmallWrapper>
        <SmallWrapper>
          <Paragraph
            data={
              window.matchMedia("(orientation: landscape)").matches
                ? story3
                : m_story3
            }
          />
        </SmallWrapper>
        <Paragraph
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? story4
              : m_story4
          }
        />
      </Wrapper>

      <div
        style={{
          marginBottom: window.matchMedia("(orientation: landscape)").matches
            ? "7px"
            : "5px",
        }}
      >
        <Banner src={human} />
      </div>

      <LoadMapCover>
        <LoadMap />
        <Wrapper style={{ marginBottom: "0" }}>
          <Paragraph
            data={
              window.matchMedia("(orientation: landscape)").matches
                ? story5
                : m_story5
            }
            color={"white"}
          />
        </Wrapper>
      </LoadMapCover>

      <Greeny src={greeny}></Greeny>

      <Wrapper style={{ marginBottom: "0" }}>
        <Paragraph
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? story6
              : m_story6
          }
          color={"rgba(0,0,0,0.95)"}
        />
      </Wrapper>
    </Container>
  );
};

export default Story;
