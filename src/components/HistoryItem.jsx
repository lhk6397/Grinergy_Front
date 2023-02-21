import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const BigWrapper = styled(motion.div)`
  border-top: 0.5px solid rgba(0, 0, 0, 0.95);
  width: 100%;
  padding: 6.6667vh 0;
  padding-bottom: ${(props) => props.isENG && "5.6667vh"};
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    padding-bottom: 0;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 4.2vh 0;
  }
`;

const Year = styled.h2`
  font-size: 2.1875vw;
  margin-bottom: ${(props) => (props.isENG ? "-5px" : "0.055em")};
  letter-spacing: 0.038em;
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) => props.theme.font.eng.bold};
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 2px;
    font-size: 1.4rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 1rem;
  }
`;

const Title = styled.h3`
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.bold};
  font-size: 1.09375vw;
  color: ${(props) => props.theme.color.green};
  text-align: center;
  white-space: pre-wrap;
  ${(props) =>
    props.isENG &&
    css`
      ::first-letter {
        font-size: 1.12vw;
      }
    `}
  margin-bottom: ${(props) => (props.isENG ? "30px" : "40px")};
  @media screen and (${(props) => props.theme.size.md}) {
    margin-bottom: 20px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 14px;
    margin-bottom: 15px;
    ${(props) =>
      props.isENG &&
      css`
        ::first-letter {
          font-size: 14.5px;
        }
      `}
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 0.7rem;
    margin-bottom: 1.2rem;
    ${(props) =>
      props.isENG &&
      css`
        ::first-letter {
          font-size: 0.75rem;
        }
      `}
  }
`;

const Wrapper = styled.ul`
  width: 100%;
  color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.09375vw;
  margin-left: ${(props) => !props.isENG && "10%"};
  letter-spacing: ${(props) => !props.isENG && "-0.05em"};
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 10px;
  }
`;

const Item = styled.li`
  margin-left: 19.047%;
  display: flex;
  line-height: ${(props) => (props.isENG ? "1.3vw" : "1.9271vw")};
  margin-bottom: 7.5px;
  @media screen and (${(props) => props.theme.size.md}) {
    margin-bottom: 5px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    line-height: ${(props) => (props.isENG ? "17px" : "20px")};
    margin-bottom: 1px;
    /* margin-left: ${(props) => (props.isENG ? "3%" : "14.047%")}; */
    margin-left: 3%;
  }
`;

const Month = styled.span`
  white-space: nowrap;
  margin-right: 4.395%;
  width: 30px;
  font-size: 12px;
  color: ${(props) => (props.isENG ? "rgba(0,0,0,0.6)" : "#000")};
  /* @media screen and (${(props) => props.theme.size.sm}) {
    width: 20px;
  } */
`;

const Achievement = styled.span`
  white-space: pre-wrap;
`;

const HistoryItem = ({ data }) => {
  const { isENG } = useContext(LanguageContext);
  const { year, title, etitle, history } = data;
  return (
    <BigWrapper isENG={isENG}>
      <Year isENG={isENG}>{year}</Year>
      <Title isENG={isENG}>{isENG ? etitle : title}</Title>
      <Wrapper isENG={isENG}>
        {history?.map(
          (
            [
              month,
              achievement,
              e_month,
              e_achievement,
              m_achivement,
              e_m_achivement,
            ],
            index
          ) => {
            return (
              <>
                <Item isENG={isENG} key={index}>
                  <Month isENG={isENG}>{isENG ? e_month : month + "월"}</Month>
                  {isENG ? (
                    <Achievement>
                      {window.matchMedia("(orientation: landscape)").matches
                        ? e_achievement
                        : e_m_achivement !== undefined
                        ? e_m_achivement
                        : e_achievement}
                    </Achievement>
                  ) : (
                    <Achievement>
                      {window.matchMedia("(orientation: landscape)").matches
                        ? achievement
                        : m_achivement !== undefined
                        ? m_achivement
                        : achievement}
                    </Achievement>
                  )}
                </Item>
              </>
            );
          }
        )}
      </Wrapper>
    </BigWrapper>
  );
};

export default HistoryItem;
