import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  width: 100%;
  height: 24.375vw;
  border-bottom: 0.75px solid rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 70%;
    margin: 0 auto;
    padding: 5vh 0;
    height: auto;
    border-bottom: 2px solid #000;
  }
`;

const BigWrapper = styled.div`
  width: 100%;
  height: 70.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    flex-direction: column-reverse;
  }
`;

const InfoText = styled.div`
  width: 54.166%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
    margin-top: 5vh;
  }
`;

const Wrapper = styled.div`
  height: 34.5%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: ${(props) => props.theme.color.green};
  border-bottom: 0.5px solid #000;
  @media screen and (${(props) => props.theme.size.sm}) {
    padding-bottom: 5px;
  }
`;

const Tag = styled.h3`
  position: relative;
  bottom: 0.2604vw;
  font-size: 1.1979vw;
  letter-spacing: -0.03em;
  font-family: ${(props) => props.theme.font.kr.bold};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15px;
  }
`;

const Figure = styled.h1`
  position: relative;
  font-size: 2.9167vw;
  font-family: ${(props) => props.theme.font.eng.condensed};
  bottom: -0.625vw;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 40px;
    bottom: -12px;
  }
`;

const Text = styled.p`
  font-size: 0.9896vw;
  line-height: 1.6667vw;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
    line-height: 18px;
    margin-top: 4vh;
  }
`;

const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 43.257%;
  aspect-ratio: 340/330;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 80%;
  }
`;

const Icon = styled.img`
  width: 35%;
  max-height: 30%;
  object-fit: contain;
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
        <Img src={img}>
          <Icon src={icon} />
        </Img>
      </BigWrapper>
    </Container>
  );
};

export default LTOInfoItem;
