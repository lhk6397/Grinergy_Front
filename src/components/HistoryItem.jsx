import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const BigWrapper = styled(motion.div)`
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${(props) => props.theme.size.md}) {
    padding: 1.5rem 0;
  }
`;

const Year = styled.h2`
  font-size: 42px;
  margin-bottom: 0.5rem;
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
  font-size: 23px;
  color: ${(props) => props.theme.color.green};
  margin-bottom: 2.5rem;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 1.3rem;
    margin-bottom: 2.3rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1.1rem;
    margin-bottom: 2.1rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 0.9rem;
    margin-bottom: 1.9rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 0.7rem;
    margin-bottom: 1.2rem;
  }
`;

const Wrapper = styled.div`
  width: 75%;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 100%;
    font-size: 1rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 0.75rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 0.6rem;
  }
`;

const MonthList = styled.ol`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const Month = styled.li`
  height: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    height: 2.5rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 2.2rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    height: 1.8rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 1.6rem;
  }
`;

const AchieveList = styled(MonthList)`
  width: 75%;
  align-items: start;
`;

const Achievement = styled(Month)``;

const leftToRight = {
  hide: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const HistoryItem = ({ data }) => {
  const [ref, inView] = useInView();
  const { year, title, month, achievement } = data;
  return (
    <BigWrapper
      ref={ref}
      variants={leftToRight}
      animate={inView ? "show" : "hide"}
      initial={"hide"}
    >
      <Year>{year}</Year>
      <Title>{title}</Title>
      <Wrapper>
        <MonthList>
          {month.map((value, index) => (
            <Month key={index}>{value + "월"}</Month>
          ))}
        </MonthList>
        <AchieveList>
          {achievement.map((value, index) => (
            <Achievement key={index}>{value}</Achievement>
          ))}
        </AchieveList>
      </Wrapper>
    </BigWrapper>
  );
};

export default HistoryItem;
