import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CoverImg = styled(motion.img)`
  width: ${(props) => (props.full ? "100%" : "93%")};
  height: 90vh;
  display: block;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.md}) {
    height: auto;
  }
`;

const Banner = ({ src, full }) => {
  return <CoverImg src={src} full={full} />;
};

export default Banner;
