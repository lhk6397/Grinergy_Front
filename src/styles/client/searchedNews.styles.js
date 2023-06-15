import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 75vw;
  overflow: hidden;
  margin: 0 auto;
  min-height: 74vh;
  margin-bottom: 4.1666vh;
  margin-top: 16.55vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 90vw;
    margin-bottom: 2vh;
    margin-top: 0%;
  }
`;

export const NewsGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 6%;
  grid-row-gap: 15vh;
  @media screen and (${(props) => props.theme.size.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 0;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 10vh;
  }
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    @media screen and (${(props) => props.theme.size.sm}) {
      height: 220px;
    }
  }
  font-family: ${(props) => props.theme.font.kr.regular};
`;

export const NewsTitle = styled.span`
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.85);
  }
`;

export const NewsDescription = styled.p`
  display: block;
  font-size: 12.5px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.5);
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  padding-top: 2vh;
  font-size: 5vw;
  line-height: 4.5vw;
  letter-spacing: -0.015em;
  margin-bottom: 17.592vh;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    display: none;
  }
`;

export const MobileStyledTitle = styled(StyledTitle)`
  display: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    margin: 0 auto;
    width: fit-content;
    text-align: left;
    font-size: 11.2vw;
    line-height: 11vw;
    margin-bottom: 5vh;
    padding-top: 5vh;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
  font-family: ${(props) => props.theme.font.kr.regular};
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  margin-bottom: 5px;
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 0.3rem;
  }
`;
