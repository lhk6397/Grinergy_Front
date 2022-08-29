import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const CoverImg = styled(motion.img)`
  width: 100%;
`;

// const imgFadeIn = {
//   start: { filter: "brightness(0.4)" },
//   end: { filter: "brightness(1)", transition: { duration: 1, delay: 0.5 } },
// };

const Banner = ({ src }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <CoverImg
      ref={ref}
      src={src}
      // variants={imgFadeIn}
      // animate={inView ? "end" : "start"}
      // initial={"start"}
    />
  );
};

export default Banner;
