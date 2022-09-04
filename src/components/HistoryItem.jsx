import styled from "styled-components";
// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const BigWrapper = styled(motion.div)`
  border-top: 0.5px solid rgba(0, 0, 0, 0.95);
  width: 100%;
  padding: 6.6667vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    padding-bottom: 0;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    padding: 4.2vh 0;
  }
`;

const Year = styled.h2`
  font-size: 2.1875vw;
  margin-bottom: 0.055em;
  letter-spacing: 0.038em;
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) => props.theme.font.eng.bold};
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 2rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1.8rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 1.4rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 1rem;
  }
`;

const Title = styled.h3`
  font-family: ${(props) => props.theme.font.kr.bold};
  letter-spacing: 0.03em;
  font-size: 1.1979vw;
  color: ${(props) => props.theme.color.green};
  margin-bottom: 40px;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 1.3rem;
    margin-bottom: 2.3rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1.1rem;
    margin-bottom: 2.1rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 14px;
    margin-bottom: 15px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 0.7rem;
    margin-bottom: 1.2rem;
  }
`;

const Wrapper = styled.ul`
  width: 100%;
  color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.1979vw;
  letter-spacing: -0.05em;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.lg}) {
    font-size: 20px;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 16px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 14px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 13px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 10px;
  }
`;

const Item = styled.li`
  margin-left: 19.047%;
  display: flex;
  line-height: 1.9271vw;
  margin-bottom: 7.5px;
  @media screen and (${(props) => props.theme.size.sm}) {
    line-height: 20px;
    margin-bottom: 1px;
    margin-left: 14.047%;
  }
  /* @media screen and (${(props) => props.theme.size.lg}) {
    line-height: 35px;
    margin-bottom: 6.5px;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    line-height: 31px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-left: 15%;
    line-height: 29px;
    margin-bottom: 2.5px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    line-height: 27px;
    margin-bottom: 1.5px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 25px;
    margin-bottom: 1px;
  } */
`;

const Month = styled.span`
  white-space: nowrap;
  margin-right: 4.395%;
`;

const Achievement = styled.span`
  white-space: pre-wrap;
  @media screen and (${(props) => props.theme.size.ss}) {
    /* white-space: normal; */
  }
`;

// const leftToRight = {
//   hide: { opacity: 0, x: 50 },
//   show: { opacity: 1, x: 0 },
// };

const HistoryItem = ({ data }) => {
  // const [ref, inView] = useInView();
  const { year, title, history } = data;
  return (
    <BigWrapper
    // ref={ref}
    // variants={leftToRight}
    // animate={inView ? "show" : "hide"}
    // initial={"hide"}
    >
      <Year>{year}</Year>
      <Title>{title}</Title>
      <Wrapper>
        {history.map(([month, achievement, m_achivement], index) => {
          console.log(m_achivement);
          return (
            <>
              <Item key={index}>
                <Month>{month + "월"}</Month>
                <Achievement>
                  {window.matchMedia("(orientation: landscape)").matches
                    ? achievement
                    : m_achivement !== undefined
                    ? m_achivement
                    : achievement}
                </Achievement>
              </Item>
            </>
          );
        })}
      </Wrapper>
    </BigWrapper>
  );
};

export default HistoryItem;
