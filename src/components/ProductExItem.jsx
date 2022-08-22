import React from "react";
import styled from "styled-components";
// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* will-change: opacity; */
`;

const Img = styled.img`
  width: 100%;
  height: 30vw;
  object-fit: cover;
  box-shadow: 5px 5px 20px 3px rgba(0, 0, 0, 0.3);
`;

const Text = styled.span`
  font-size: 39px;
  letter-spacing: -0.015em;
  margin-top: 0.8rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.md}) {
    margin-top: 0.7rem;
    font-size: 30px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 0.6rem;
    font-size: 14px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-top: 0.5rem;
    font-size: 13px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-family: ${(props) => props.theme.font.kr.sm};
    margin-top: 0.4rem;
    font-size: 11px;
  }
`;

// const fadeInOut = {
//   hide: { opacity: 0 },
//   show: { opacity: 1 },
// };

const ProductExItem = ({ data }) => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  // });

  return (
    <Wrapper
    // ref={ref}
    // variants={fadeInOut}
    // animate={inView ? "show" : "hide"}
    // initial={"hide"}
    >
      <Img src={data.img} />
      <Text>{data.text}</Text>
    </Wrapper>
  );
};

export default ProductExItem;
