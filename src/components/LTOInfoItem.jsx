import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const BigWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 62px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    margin: 0 auto;
    width: 70vw;
    padding: 31px 0;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
    flex-direction: column-reverse;
    padding: 5vh 0;
  }
`;

const InfoText = styled.div`
  /* width: 54.166%; */
  width: 50.9554%;
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
  border-bottom: 0.5pt solid #000;
  @media screen and (${(props) => props.theme.size.sm}) {
    padding-bottom: 5px;
  }
`;

const Tag = styled.h3`
  position: relative;
  bottom: 0.2604vw;
  font-size: 20px;
  letter-spacing: -0.03em;
  font-family: ${(props) => props.theme.font.kr.bold};
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 15px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 12pt;
  }
`;

const Figure = styled.h1`
  position: relative;
  font-size: 56px;
  font-family: ${(props) => props.theme.font.eng.condensed};
  bottom: -0.725vw;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 50px;
    bottom: -1.725vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 40pt;
    bottom: -12pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 35pt;
    bottom: -12pt;
  }
`;

const Text = styled.p`
  font-size: 19px;
  line-height: 32px;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 14px;
    line-height: 27px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13pt;
    line-height: 19pt;
    margin-top: 5vh;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 9.5pt;
    line-height: 16pt;
  }
`;

const Img = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 43.3121%;
  /* height: 100%; */
  aspect-ratio: 340/330;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 80%;
  }
`;

const Icon = styled.img`
  width: 150%;
  object-fit: contain;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 180%;
  }
`;

const Container = styled(motion.div)`
  width: 785px;
  height: 470px;
  border-bottom: 0.75pt solid rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;

  :last-child {
    ${BigWrapper} {
      ${Img} {
        ${Icon} {
          transform: translateX(2%);
        }
      }
    }
  }
  @media screen and (${(props) => props.theme.size.md}) {
    width: 70vw;
    height: 80vh;
    margin: 0 auto;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 75%;
    margin: 0 auto;
    height: auto;
    border-bottom: 1pt solid #000;
    :nth-child(4) {
      ${BigWrapper} {
        ${Img} {
          ${Icon} {
            transform: translateX(2%);
          }
        }
      }
    }
  }
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
          <Text>
            {window.matchMedia("(orientation: landscape)").matches
              ? text[0]
              : text[1]}
          </Text>
        </InfoText>
        <Img src={img}>
          <Icon src={icon} />
        </Img>
      </BigWrapper>
    </Container>
  );
};

export default LTOInfoItem;
