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
`;

const Text = styled.span`
  font-size: 2.0313vw;
  letter-spacing: -0.015em;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 3px;
    font-size: 12.5pt;
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
