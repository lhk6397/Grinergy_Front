import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  margin-bottom: 4.1666vh;
  overflow: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 2vh;
  }
`;

export const SmallPhrase = styled.h3`
  font-size: 1.5104vw;
  letter-spacing: ${(props) => (props.isENG ? "-0.015em" : "-0.03em")};
  text-align: center;
  margin: 17.592vh 0 6.6667vh 0;
  margin-bottom: ${(props) => props.isENG && "5.667vh"};
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.regular};

  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 16px;
    margin: 8vh 0 1.2vh 0;
  }
`;

export const HistoryItemList = styled.ul`
  width: 28.646vw;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 80%;
  }
`;
