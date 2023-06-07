import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  overflow-x: hidden;
  margin-bottom: 4.1666vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 2vh;
  }
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin: 17.592vh auto;
  display: flex;
  flex-direction: column;
  gap: 8.426vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 8vh auto;
    gap: 46px;
  }
`;

export const Promotion = styled.div`
  height: 85vh;
  background-color: #3c3736;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 60vw;
  }
`;

export const LoadMapCover = styled.div`
  padding: 17vh 0;
  background-color: ${(props) => props.theme.color.green};
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 8vh 0;
  }
`;

export const Greeny = styled.img`
  width: 6.333vw;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  margin-top: 19.44vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 8vh;
    width: 50px;
  }
`;
