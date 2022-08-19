import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Container = styled(motion.div)`
  width: 100%;
  padding: 10% 0;
  height: 24vw;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    padding: 5% 0;
    height: 40vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    /* padding: 5vh 0; */
    height: 27vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    /* padding: 4vh 0; */
    height: 25vh;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 21vh;
    /* padding: 3vh 0; */
  }
`;

const InfoText = styled.div`
  width: 52.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: ${(props) => props.theme.color.green};
  border-bottom: 1px solid #000;
  padding-bottom: 0.3rem;
`;

const Tag = styled.h3`
  font-size: 27px;

  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 16px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 10px;
    transform: scale(0.8);
    position: relative;
    left: -5px;
    bottom: -3px;
  }
`;

const Figure = styled.h1`
  position: relative;
  font-size: 56px;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 2.5rem;
    bottom: -5px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1.8rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1.4rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 1.2rem;
  }
`;

const Text = styled.p`
  font-size: 19px;
  line-height: 2rem;
  white-space: pre-wrap;

  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 13px;
    line-height: 1.5rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    white-space: normal;
    font-size: 10px;
    line-height: 1rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    position: relative;
    bottom: -5px;
    left: -15px;
    transform: scale(0.8);
    line-height: 1rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    transform: translate(-50%, -50%);
    top: -4px;
    left: -21px;
    transform: scale(0.65);
    line-height: 12px;
  }
`;

const Icon = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 20%;
  max-height: 20%;
  height: 30%;
`;

const leftToRight = {
  hide: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const LTOInfoItem = ({ data }) => {
  const [ref, inView] = useInView();
  const { tag, figure, text, img, icon } = data;
  return (
    <Container
      ref={ref}
      variants={leftToRight}
      animate={inView ? "show" : "hide"}
      initial={"hide"}
    >
      <InfoText>
        <Wrapper>
          <Tag>{tag}</Tag>
          <Figure>{figure}</Figure>
        </Wrapper>
        <Text>{text}</Text>
      </InfoText>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "42.5%",
          height: "100%",
        }}
      >
        <Img src={img} />
        <Icon src={icon} />
      </div>
    </Container>
  );
};

export default LTOInfoItem;
