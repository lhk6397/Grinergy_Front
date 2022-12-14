import { motion } from "framer-motion";
import theme from "../styles/theme";
import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

const Wrapper = styled(motion.div)`
  font-size: 1.09375vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 12px;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.font.kr.bold};
  letter-spacing: -0.03em;
  color: ${(props) => props.color};
  /* color: #33bf8c; */
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 23px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.color};
  line-height: 1.8229vw;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    line-height: 22px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 18px;
  }
`;

// const leftToRight = {
//   hide: { opacity: 0, x: 50 },
//   show: { opacity: 1, x: 0 },
// };

const Paragraph = ({
  data,
  color = [theme.color.green, "rgba(0,0,0,0.95)"],
}) => {
  let { title, text } = data;
  // const [ref, inView] = useInView();
  return (
    <Wrapper
    // ref={ref}
    // variants={leftToRight}
    // animate={inView ? "show" : "hide"}
    // initial={"hide"}
    >
      <Title color={color[0]}>{title}</Title>
      <Text color={color[1]}>{Parser(text)}</Text>
    </Wrapper>
  );
};

export default Paragraph;
