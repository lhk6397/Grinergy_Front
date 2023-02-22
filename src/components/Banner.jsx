import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CoverImg = styled(motion.img)`
  width: ${(props) => (props.full ? "100%" : "93%")};
  height: ${(props) =>
    props.full ? "auto" : props.isProductPage ? "821px" : "650px"};
  display: block;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.md}) {
    height: auto;
  }
`;

const Banner = ({ src, full, isProductPage }) => {
  return <CoverImg src={src} full={full} isProductPage />;
};

export default Banner;
