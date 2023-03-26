import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CoverImg = styled(motion.img)`
  width: ${(props) => (props.full ? "100%" : "93%")};
  /* height: ${(props) => (props.full ? "auto" : "650px")}; */
  display: block;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: ${(props) => props.isHistoryPage && "30vh"};
  }
`;

const Banner = ({ src, full, isHistoryPage }) => {
  return <CoverImg src={src} full={full} isHistoryPage={isHistoryPage} />;
};

export default Banner;
