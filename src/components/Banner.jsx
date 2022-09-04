import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const CoverImg = styled(motion.img)`
  width: 100%;
`;

const Banner = ({ src }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return <CoverImg ref={ref} src={src} />;
};

export default Banner;
