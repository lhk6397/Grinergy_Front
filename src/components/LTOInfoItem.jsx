import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

// 786 * 468

const Container = styled(motion.div)`
  width: 100%;
  height: 24.375vw;
  border-bottom: 0.75px solid rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 50vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 1.78vw 0;
    height: 51vw;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    height: 42vw;
  } */
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 52vw;
  }
`;

const BigWrapper = styled.div`
  height: 70.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoText = styled.div`
  width: 54.166%;
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
  height: 34.5%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: ${(props) => props.theme.color.green};
  border-bottom: 1px solid #000;
`;

const Tag = styled.h3`
  position: relative;
  bottom: 5px;
  font-size: 23px;
  letter-spacing: -0.03em;
  font-family: ${(props) => props.theme.font.kr.bold};
  bottom: 8px;
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
    bottom: 1px;
  }
`;

const Figure = styled.h1`
  position: relative;
  font-size: 56px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  bottom: -12px;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 2.5rem;
    bottom: -5px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1.8rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 1.4rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 1.2rem;
  }
`;

const Text = styled.p`
  font-size: 19px;
  line-height: 32px;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  font-family: ${(props) => props.theme.font.kr.medium};
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
    top: -7px;
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

// const leftToRight = {
//   hide: { opacity: 0, x: 50 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

const LTOInfoItem = ({ data }) => {
  // const [ref, inView] = useInView();
  const { tag, figure, text, img, icon } = data;
  return (
    <Container
    // ref={ref}
    // variants={leftToRight}
    // animate={inView ? "show" : "hide"}
    // initial={"hide"}
    >
      <BigWrapper>
        <InfoText>
          <Wrapper>
            <Tag>{tag}</Tag>
            <Figure>{figure}</Figure>
          </Wrapper>
          <Text>{text}</Text>
        </InfoText>
        <div
          style={{
            position: "relative",
            width: "43.257%",
            aspectRatio: "340/330",
          }}
        >
          <Img src={img} />
          <Icon src={icon} />
        </div>
      </BigWrapper>
    </Container>
  );
};

export default LTOInfoItem;
