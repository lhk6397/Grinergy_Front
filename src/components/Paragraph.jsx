import { motion } from "framer-motion";
import theme from "../styles/theme";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Parser from "html-react-parser";

const Wrapper = styled(motion.div)`
  font-size: 21px;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 18px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 12px;
  }

  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 10px;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.font.kr.bold};
  letter-spacing: -0.03em;
  color: ${(props) => props.color};
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 1.5rem;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-bottom: 1.3rem;
  }
`;

const Text = styled.p`
  color: ${(props) => props.color};
  line-height: 35px;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  font-family: ${(props) => props.theme.font.kr.medium};
  strong {
    font-family: ${(props) => props.theme.font.kr.bold};
  }
  @media screen and (${(props) => props.theme.size.md}) {
    strong {
      font-size: 19px;
    }
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    white-space: normal;
    line-height: 25px;
    strong {
      font-size: 13px;
    }
  }

  @media screen and (${(props) => props.theme.size.ss}) {
    line-height: 20px;
    strong {
      font-size: 11px;
    }
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
