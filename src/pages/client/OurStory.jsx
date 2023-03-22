import React, { useEffect } from "react";
import styled from "styled-components";
import clip from "../../assets/videos/promotionClip.mp4";
import human from "../../assets/images/human.jpg";
import greeny from "../../assets/images/ourstory_greeny.png";
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
} from "../../data/ParagraphData";
import {
  Banner,
  LoadMap,
  Paragraph,
  VideoClip,
  Phrase,
  BannerSlider,
} from "../../components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Container = styled(motion.div)`
  overflow-x: hidden;
  margin-bottom: 4.1666vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 2vh;
  }
`;

const Wrapper = styled.div`
  width: fit-content;
  margin: 17.592vh auto;
  display: flex;
  flex-direction: column;
  gap: 8.426vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 8vh auto;
    gap: 46px;
  }
`;

const Promotion = styled.div`
  height: 85vh;
  background-color: #3c3736;
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

const OurStory = () => {
  const { isENG } = useContext(LanguageContext);
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
      {isENG ? (
        <Phrase>
          {window.matchMedia("(orientation: landscape)").matches ? (
            <>
              Connecting <br />
              humanity
              <br />
              to future energy
            </>
          ) : (
            <>
              Connecting humanity
              <br />
              to future energy
            </>
          )}
        </Phrase>
      ) : (
        <Phrase>
          인간과
          <br />
          미래 에너지를 잇다
        </Phrase>
      )}
      <BannerSlider />

      <Paragraph
        data={
          window.matchMedia("(orientation: landscape)").matches
            ? story1
            : m_story1
        }
      />

      <Promotion>
        <VideoClip src={clip} />
      </Promotion>
      <Wrapper>
        <Paragraph
          noMargin
          isOurstoryNoMargin
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? story2
              : m_story2
          }
        />
        <Paragraph
          noMargin
          isOurstoryNoMargin
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? story3
              : m_story3
          }
        />
        <Paragraph
          noMargin
          isOurstoryNoMargin
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
          fontSize: 0,
        }}
      >
        <Banner src={human} full />
      </div>
      <LoadMapCover>
        <LoadMap />
        <Paragraph
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? story5
              : m_story5
          }
          color={["white", "white"]}
          isOurStoryNoBottom
        />
      </LoadMapCover>
      <Greeny src={greeny}></Greeny>
      <Paragraph
        data={
          window.matchMedia("(orientation: landscape)").matches
            ? story6
            : m_story6
        }
        color={"rgba(0,0,0,0.95)"}
        isOurStoryNoBottom
      />
    </Container>
  );
};

export default OurStory;
