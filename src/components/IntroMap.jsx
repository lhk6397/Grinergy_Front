import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.green};
  padding: 16.2037vh 12.8vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.15vw;
  line-height: 25px;
  letter-spacing: -0.03em;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.md}) {
    line-height: 19px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 9pt;
    padding: 8vh 0;
    line-height: 13pt;
    height: auto;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 10px;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Circle = styled(motion.div)`
  width: 14.7396vw;
  aspect-ratio: 1/1;
  border: 0.5px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 120px;
    border: 0.75px solid white;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 100px;
  }
`;

const SmallCircle = styled(Circle)`
  width: 5px;
  display: block;
  background-color: #fff;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: none;
  }
`;

const ReverseCircle = styled(Circle)`
  background-color: #fff;
  color: ${(props) => props.theme.color.green};
`;

const Pseudo = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    width: 100%;
    height: 120px;
    transform: translateY(-0.8%);
  }
`;

const PseudoBox = styled.div`
  width: 14.7396vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.1979vw;
  :last-child {
    margin: 0;
  }
  :nth-child(2) {
    margin-left: 12.2396vw;
    @media screen and (${(props) => props.theme.size.sm}) {
      margin-left: 0;
    }
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
    height: 120px;
    margin-right: 0;
    margin-bottom: 10px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 100px;
  }
`;

const RowLine = styled.div`
  font-size: 15.3px;

  width: 1.1979vw;
  height: 0.75px;
  background-color: #fff;
  :nth-child(2) {
    font-family: ${(props) => props.theme.font.kr.medium};
    position: relative;
    width: 12.2396vw;
    color: #fff;
    @media screen and (${(props) => props.theme.size.sm}) {
      height: 0;
      width: 100%;
      margin-bottom: 120px;
    }
    div {
      position: absolute;
      width: 80%;
      height: 2.6042vw;
      line-height: 2.6042vw;
      text-align: center;
      top: -100px;
      border: 0.5px solid #fff;

      @media screen and (${(props) => props.theme.size.sm}) {
        border: 0.75px solid white;
        font-size: 14px;
        left: 50%;
        transform: translateX(-50%);
        height: 27px;
        line-height: 25px;
        top: 80px;
        width: 80%;
      }

      @media screen and (${(props) => props.theme.size.xs}) {
        font-size: 10px;
      }
    }
    span {
      margin-left: 10px;
      position: absolute;
      white-space: nowrap;
      @media screen and (${(props) => props.theme.size.md}) {
        margin-left: 0;
      }
      :nth-child(1) {
        top: -30px;
        @media screen and (${(props) => props.theme.size.sm}) {
          margin-left: 0;
          font-size: 12px;
          left: 50%;
          transform: translateX(-50%);
          top: 31px;
        }
        @media screen and (${(props) => props.theme.size.xs}) {
          font-size: 11px;
        }
      }
      :nth-child(2) {
        top: 10px;
        @media screen and (${(props) => props.theme.size.sm}) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 10px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 0.5px;
    height: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    border-top: 2px solid #fff;
    flex-direction: column;
    width: 120px;
    :nth-child(2) {
      width: 80px;
    }
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 100px;
    :nth-child(2) {
      width: 50px;
    }
  }
`;

const ColLine = styled.div`
  height: 17.5926vh;
  width: 0.5px;
  background-color: #fff;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 0.75px;
    width: 100%;
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
          <Pseudo></Pseudo>
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
