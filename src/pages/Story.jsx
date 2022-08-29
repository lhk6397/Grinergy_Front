import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "../components/BannerSlider";
import clip from "../assets/images/promotionClip.mp4";
import human from "../assets/images/human.jpg";
import greeny from "../assets/images/ourstory_greeny.png";
import { motion } from "framer-motion";
import {
  story1,
  story2,
  story3,
  story4,
  story5,
  story6,
} from "../data/ParagraphData";
import { Banner, LoadMap, Paragraph, VideoClip } from "../components";

const Container = styled.div`
  margin-top: 19.623vh;
  overflow-x: hidden;
  margin-bottom: 4.1666vh;
  /* @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 15vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
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

  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 6.9vw;
    line-height: 75px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 8.9vw;
    line-height: 65px;
    margin-bottom: 20px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    line-height: 40px;
    margin-bottom: 15px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 35px;
  }
`;

const Wrapper = styled(motion.div)`
  width: 40.833vw;
  width: fit-content;
  margin: 17.592vh auto;
  @media screen and (${(props) => props.theme.size.lg}) {
    width: fit-content;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 80vw;
    margin: 10vh auto;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin: 6.5vh auto;
  }
`;

const Promotion = styled.div`
  height: 92vh;
  background-color: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 30vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    height: 26vh;
  }
`;

const LoadMapCover = styled.div`
  padding: 17vh 0;
  background-color: ${(props) => props.theme.color.green};
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 10vh 0;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    padding: 6vh 0;
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

  @media screen and (${(props) => props.theme.size.md}) {
    width: 60px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 50px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 40px;
  }
`;

const Story = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Our Story`;
  }, []);

  return (
    <Container>
      <Phrases>
        인간과
        <br />
        미래 에너지를 잇다
      </Phrases>

      <Slider />

      <Wrapper>
        <Paragraph data={story1} />
      </Wrapper>

      <Promotion>
        <VideoClip src={clip} />
      </Promotion>

      <Wrapper>
        <div style={{ marginBottom: "8.426vh" }}>
          <Paragraph data={story2} />
        </div>
        <div style={{ marginBottom: "8.426vh" }}>
          <Paragraph data={story3} />
        </div>
        <Paragraph data={story4} />
      </Wrapper>

      <div style={{ marginBottom: "-3.5px" }}>
        <Banner src={human} />
      </div>

      <LoadMapCover>
        <LoadMap />
        <Wrapper style={{ marginBottom: "0" }}>
          <Paragraph data={story5} color={"white"} />
        </Wrapper>
      </LoadMapCover>

      <Greeny src={greeny}></Greeny>

      <Wrapper style={{ marginBottom: "0" }}>
        <Paragraph data={story6} color={"rgba(0,0,0,0.95)"} />
      </Wrapper>
    </Container>
  );
};

export default Story;
