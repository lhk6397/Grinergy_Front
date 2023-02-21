import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

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
  font-size: ${(props) => (props.isENG ? "1vw" : "1.15vw")};
  line-height: 25px;
  letter-spacing: ${(props) => (props.isENG ? "-0.01em" : "-0.03em")};
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.bold};
  @media screen and (${(props) => props.theme.size.md}) {
    line-height: 19px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
    padding: 8vh 0;
    line-height: ${(props) => (props.isENG ? "10pt" : "13pt")};
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
  font-size: 17.3px;
  width: 1.1979vw;
  height: 0.75px;
  background-color: #fff;

  :nth-child(2) {
    font-family: ${(props) =>
      props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.medium};
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
      height: 2.4042vw;
      font-size: ${(props) => (props.isENG ? "22px" : "18px")};
      line-height: 2.6042vw;
      text-align: center;
      top: -100px;
      border: 0.5px solid #fff;

      @media screen and (${(props) => props.theme.size.sm}) {
        border: 0.75px solid white;
        font-size: ${(props) => (props.isENG ? "13px" : "11px")};
        left: ${(props) => (props.isENG ? "38%" : "50%")};
        transform: translateX(-50%);
        height: 27px;
        line-height: ${(props) => (props.isENG ? "30px" : "25px")};
        top: 70px;
        width: 80%;
      }

      @media screen and (${(props) => props.theme.size.xs}) {
        font-size: 10px;
        left: ${(props) => (props.isENG ? "40%" : "50%")};
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
        top: ${(props) => (props.isENG ? "-22px" : "-30px")};
        font-size: ${(props) => props.isENG && "14.5px"};
        line-height: ${(props) => props.isENG && "17px"};
        @media screen and (${(props) => props.theme.size.sm}) {
          margin-left: 0;
          font-size: 12px;
          left: 50%;
          transform: translateX(-50%);
          top: ${(props) => (props.isENG ? "32px" : "34px")};
          line-height: ${(props) => props.isENG && "13px"};
          text-align: ${(props) => (props.isENG ? "start" : "center")};
          ${(props) =>
            props.isENG &&
            css`
              left: 0%;
              transform: none;
            `}
        }
        @media screen and (${(props) => props.theme.size.xs}) {
          font-size: ${(props) => (props.isENG ? "10px" : "11px")};
        }
      }
      :nth-child(2) {
        top: 13px;
        @media screen and (${(props) => props.theme.size.sm}) {
          left: 50%;
          transform: translateX(-50%);
          font-size: 15px;
          ${(props) =>
            props.isENG &&
            css`
              left: 0%;
              transform: none;
            `}
        }
        @media screen and (${(props) => props.theme.size.xs}) {
          font-size: 13px;
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

const IntroMap = () => {
  const { isENG } = useContext(LanguageContext);
  return (
    <Container isENG={isENG}>
      <Wrapper>
        <Row>
          <SmallCircle />
          <RowLine isENG={isENG}>
            <span>{isENG ? "Graphite anode material" : "흑연 음극재"}</span>
            <span>{isENG ? "lithium polymer battery" : "리튬폴리머 전지"}</span>
          </RowLine>
          <Circle>{isENG ? "Voltage 3.3v~3.7v" : "전압 3.3V~3.7V"}</Circle>
          <RowLine></RowLine>
          <Circle>
            {isENG ? (
              window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  Life span
                  <br />
                  1,000-3,000
                  <br />
                  charging and discharging
                </>
              ) : (
                <>
                  Life span
                  <br />
                  1,000-3,000
                  <br />
                  charging and
                  <br />
                  discharging
                </>
              )
            ) : (
              <>
                수명
                <br />
                1,000~3,000
                <br />
                충방전
              </>
            )}
          </Circle>
          <RowLine></RowLine>
          <Circle>
            {isENG ? (
              window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  Charging speed 1c
                  <br />
                  Operating temperature 0~40°c
                  <br />
                  Output performance 3c
                </>
              ) : (
                <>
                  Charging speed: 1c
                  <br />
                  Operating temperature:
                  <br />
                  0~40°c
                  <br />
                  Output performance: 3c
                </>
              )
            ) : (
              <>
                충전속도 1C
                <br />
                작동온도 0~40℃
                <br />
                출력성능 3C
              </>
            )}
          </Circle>
          <RowLine></RowLine>
          <Circle>
            {isENG ? (
              window.matchMedia("(orientation: landscape)").matches ? (
                <>Explosion and fire hazard</>
              ) : (
                <>
                  Explosion
                  <br />
                  and fire hazard
                </>
              )
            ) : (
              <>
                폭발 및<br />
                발화위험 존재
              </>
            )}
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
          <RowLine isENG={isENG}>
            <>
              {isENG ? (
                <span
                  style={{
                    top: `${
                      window.matchMedia("(orientation: landscape)").matches
                        ? "-40px"
                        : ""
                    }`,
                  }}
                >
                  Lithium titanate
                  <br />
                  negative electrode material
                </span>
              ) : (
                <span>리튬 티타네이트 음극재</span>
              )}
            </>
            <span>{isENG ? "LTO battery" : "LTO 전지"}</span>
            <div>{isENG ? "POTERE battery" : "POTERE 전지"}</div>
          </RowLine>
          <ReverseCircle>{isENG ? "Voltage 2.4v" : "전압 2.4V"}</ReverseCircle>
          <RowLine></RowLine>
          <ReverseCircle>
            {isENG ? (
              window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  Life span
                  <br />
                  10,000-15,000
                  <br />
                  charging and discharging
                </>
              ) : (
                <>
                  Life span
                  <br />
                  10,000-15,000
                  <br />
                  charging and
                  <br />
                  discharging
                </>
              )
            ) : (
              <>
                수명
                <br />
                10,000~15,000
                <br />
                충방전
              </>
            )}
          </ReverseCircle>
          <RowLine></RowLine>
          <ReverseCircle>
            {isENG ? (
              window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  Charging speed 10c
                  <br />
                  Operating temperature -30~50°c
                  <br />
                  Output performance up to 20c
                </>
              ) : (
                <>
                  Charging speed: 10c
                  <br />
                  Operating temperature:
                  <br />
                  -30~50°c
                  <br />
                  Output performance: 20c
                </>
              )
            ) : (
              <>
                충전속도 10C
                <br />
                작동온도 -30~50°C
                <br />
                출력성능 최대 20C
              </>
            )}
          </ReverseCircle>
          <RowLine></RowLine>
          <ReverseCircle>
            {isENG ? (
              window.matchMedia("(orientation: landscape)").matches ? (
                <>No explosion and fire hazard</>
              ) : (
                <>
                  No explosion
                  <br />
                  and fire hazard
                </>
              )
            ) : (
              <>
                폭발 및<br />
                발화위험 없음
              </>
            )}
          </ReverseCircle>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default IntroMap;
