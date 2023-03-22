import { motion } from "framer-motion";
import theme from "../../styles/theme";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Parser from "html-react-parser";
import { LanguageContext } from "../../context/LanguageContext";

const Wrapper = styled(motion.div)`
  font-size: 1.09375vw;
  width: ${(props) => (props.noMargin ? "auto" : "fit-content")};
  margin: 0 auto;
  margin-top: ${(props) => (props.isLast ? "26.5778vh" : "17.592vh")};
  margin-bottom: ${(props) =>
    props.isOurStoryNoBottom ? "0" : props.isLast ? "6.9387vh;" : "17.592vh"};
  ${(props) =>
    props.isOurstoryNoMargin &&
    css`
      margin: 0;
    `}
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100vw;
    padding-left: ${(props) => (props.isENG ? "18vw" : "16vw")};
    margin: 8vh 0;
    margin-bottom: ${(props) =>
      props.isOurStoryNoBottom ? "0" : props.isLast && "5vh"};
    margin: ${(props) => props.noMargin && "0"};
    font-size: ${(props) => (props.isENG ? "17px" : "15px")};
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 12px;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  white-space: pre-wrap;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.bold};
  letter-spacing: ${(props) => !props.isENG && "-0.03em"};
  color: ${(props) => props.color};
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 23px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.color};
  line-height: ${(props) => (props.isENG ? "1.6vw" : "1.8229vw")};
  letter-spacing: ${(props) => !props.isENG && "-0.05em"};
  white-space: pre-wrap;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    line-height: 22px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 18px;
  }
`;

const Paragraph = ({
  data,
  color = [theme.color.green, "rgba(0,0,0,0.95)"],
  isLast,
  noMargin,
  isOurStoryNoBottom,
  isOurstoryNoMargin,
}) => {
  const { isENG } = useContext(LanguageContext);
  let { title, etitle, text, etext } = data;
  return (
    <Wrapper
      isENG={isENG}
      isLast={isLast}
      noMargin={noMargin}
      isOurStoryNoBottom={isOurStoryNoBottom}
      isOurstoryNoMargin={isOurstoryNoMargin}
    >
      <Title isENG={isENG} color={color[0]}>
        {isENG ? etitle : title}
      </Title>
      <Text isENG={isENG} color={color[1]}>
        {isENG ? Parser(etext) : Parser(text)}
      </Text>
    </Wrapper>
  );
};

export default Paragraph;
