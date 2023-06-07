import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  margin-bottom: 4.1666vh;
  overflow-x: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 2vh;
  }
`;

export const CircleContainer = styled.div`
  margin: 15vw 0;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 50vw;
    margin: 20vh 0;
  }
`;

export const SmallTitle = styled.h2`
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.medium};
  font-size: 1.4063vw;
  letter-spacing: ${(props) => !props.isENG && "-0.03em"};
  color: rgba(0, 0, 0, 0.95);
  border-bottom: 0.75pt solid rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
  @media screen and (${(props) => props.theme.size.md}) {
    width: ${(props) => (props.isENG ? "64vw" : "68vw")};
    margin: 0 auto;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    text-align: ${(props) => (!props.isENG ? "center" : "start")};
    font-size: 18px;
    padding-bottom: 1vh;
    margin: 0 auto;
  }
`;

export const ProductExItemList = styled.ul`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 8vh;
  column-gap: 7px;
  @media screen and (${(props) => props.theme.size.sm}) {
    column-gap: 5px;
    row-gap: 2.5vh;
  }
`;

export const Wrapper = styled(motion.div)`
  width: fit-content;
  margin: 17.592vh auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100vw;
    margin: 8vh 0;
  }
`;
