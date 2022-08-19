import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import InvestorList from "../data/InvestorsList";

const GridTemplate = styled(motion.ul)`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5.2vw;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 50%;
    width: 70%;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 50%;
    width: 80%;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 50%;
    width: 90%;
  }
`;

const Investor = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 2rem;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 1.2rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 0.8rem;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 0.65rem;
  }
`;

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const InvestorGrid = () => {
  return (
    <GridTemplate variants={list} animate={"show"} initial={"hidden"}>
      {InvestorList.map((investor, index) => (
        <Investor key={index} variants={item}>
          <img
            src={investor}
            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
          />
        </Investor>
      ))}
    </GridTemplate>
  );
};

export default InvestorGrid;
