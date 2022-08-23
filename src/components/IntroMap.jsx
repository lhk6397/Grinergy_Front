import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.green};
  padding: 175px 12.8vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 19px;
  line-height: 29px;
  letter-spacing: -0.03em;
  font-family: ${(props) => props.theme.font.kr.medium};

  @media screen and (${(props) => props.theme.size.md}) {
    height: 80vw;
    padding: 44px 11.25vw;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    font-size: 12px;
    line-height: 22px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 80vh;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 283px;
  height: 283px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 183px;
    height: 183px;
  }
`;

const SmallCircle = styled(Circle)`
  width: 10px;
  height: 10px;
  display: block;
  background-color: #fff;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 5px;
    height: 5px;
  }
`;

const ReverseCircle = styled(Circle)`
  background-color: #fff;
  color: ${(props) => props.theme.color.green};
`;

const PseudoBox = styled.div`
  width: 283px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  :last-child {
    margin: 0;
  }
  :first-child {
    margin-left: 235px;
    @media screen and (${(props) => props.theme.size.md}) {
      margin-left: 134px;
    }
  }
  @media screen and (${(props) => props.theme.size.md}) {
    width: 183px;
    margin-right: 8px;
  }
`;

const RowLine = styled.div`
  width: 23px;
  height: 1px;
  background-color: #fff;
  :nth-child(2) {
    position: relative;
    width: 235px;
    color: #fff;
    @media screen and (${(props) => props.theme.size.md}) {
      width: 134px;
    }
    div {
      position: absolute;
      width: 80%;
      height: 50px;
      text-align: center;
      top: -100px;
      border: 1px solid #fff;
      @media screen and (${(props) => props.theme.size.md}) {
        height: 25px;
        top: -65px;
      }
    }
    span {
      margin-left: 10px;
      position: absolute;
      :nth-child(1) {
        top: -30px;
        @media screen and (${(props) => props.theme.size.md}) {
          top: -25px;
        }
      }
      :nth-child(2) {
        top: 10px;
      }
    }
  }
  @media screen and (${(props) => props.theme.size.md}) {
    width: 13px;
  }
`;

const ColLine = styled.div`
  height: 190px;
  width: 1px;
  background-color: #fff;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 90px;
  }
`;

const textFadeIn = {
  show: (custom) =>
    custom === "green"
      ? { color: "rgba(0, 145, 145 ,0.1)" }
      : { color: "rgba(255, 255, 255 ,0.1)" },
  hide: (custom) =>
    custom === "green"
      ? {
          color: "rgba(0, 145, 145 ,1)",
          transition: {
            duration: 1,
          },
        }
      : {
          color: "rgba(255, 255, 255 ,1)",
          transition: {
            duration: 1,
          },
        },
};

const IntroMap = () => {
  // const [text1Ref, text1InView] = useInView();
  // const [text2Ref, text2InView] = useInView();
  return (
    <Container>
      <Wrapper>
        <Row>
          <SmallCircle />
          <RowLine>
            <span>흑연 음극재</span>
            <span>리튬폴리머 전지</span>
          </RowLine>
          <Circle
          // ref={text1Ref}
          // custom={"white"}
          // variants={textFadeIn}
          // animate={text1InView ? "hide" : "show"}
          // initial={"show"}
          >
            전압 3.3V~3.7V
          </Circle>
          <RowLine></RowLine>
          <Circle
          // ref={text1Ref}
          // custom={"white"}
          // variants={textFadeIn}
          // animate={text1InView ? "hide" : "show"}
          // initial={"show"}
          >
            수명
            <br />
            1,000~3,000
            <br />
            충방전
          </Circle>
          <RowLine></RowLine>
          <Circle
          // ref={text1Ref}
          // custom={"white"}
          // variants={textFadeIn}
          // animate={text1InView ? "hide" : "show"}
          // initial={"show"}
          >
            충전속도 1C
            <br />
            작동온도 0~40℃
            <br />
            출력성능 3C
          </Circle>
          <RowLine></RowLine>
          <Circle
          // ref={text1Ref}
          // custom={"white"}
          // variants={textFadeIn}
          // animate={text1InView ? "hide" : "show"}
          // initial={"show"}
          >
            폭발 및<br />
            발화위험 존재
          </Circle>
        </Row>
        <Row>
          <PseudoBox>
            <ColLine></ColLine>
          </PseudoBox>
          <PseudoBox>
            <ColLine></ColLine>
          </PseudoBox>
          <PseudoBox>
            <ColLine></ColLine>
          </PseudoBox>
          <PseudoBox>
            <ColLine></ColLine>
          </PseudoBox>
        </Row>
        <Row>
          <SmallCircle />
          <RowLine>
            <span>리튬 티타네이트 음극재</span>
            <span>LTO 전지</span>
            <div>POTERE 전지</div>
          </RowLine>
          <ReverseCircle
          // ref={text2Ref}
          // custom={"green"}
          // variants={textFadeIn}
          // animate={text2InView ? "hide" : "show"}
          // initial={"show"}
          >
            전압 2.4V
          </ReverseCircle>
          <RowLine></RowLine>
          <ReverseCircle
          // ref={text2Ref}
          // custom={"green"}
          // variants={textFadeIn}
          // animate={text2InView ? "hide" : "show"}
          // initial={"show"}
          >
            수명
            <br />
            10,000~15,000
            <br />
            충방전
          </ReverseCircle>
          <RowLine></RowLine>
          <ReverseCircle
          // ref={text2Ref}
          // custom={"green"}
          // variants={textFadeIn}
          // animate={text2InView ? "hide" : "show"}
          // initial={"show"}
          >
            충전속도 10C
            <br />
            작동온도 -30~50°C
            <br />
            출력성능 최대 20C
          </ReverseCircle>
          <RowLine></RowLine>
          <ReverseCircle
          // ref={text2Ref}
          // custom={"green"}
          // variants={textFadeIn}
          // animate={text2InView ? "hide" : "show"}
          // initial={"show"}
          >
            폭발 및<br />
            발화위험 없음
          </ReverseCircle>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default IntroMap;
