import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import InvestorList from "../data/InvestorsList";

const GridTemplate = styled(motion.ul)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10.462vh;
  column-gap: 4.687vw;
  width: 45%;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 60%;
    row-gap: 0;
  }
`;

const Investor = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

// const list = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: -50 },
//   show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
// };

const InvestorGrid = () => {
  return (
    <GridTemplate /*variants={list} animate={"show"} initial={"hidden"}*/>
      {InvestorList.map((investor, index) => (
        <Investor key={index} /*variants={item}*/>
          <Img src={investor} />
        </Investor>
      ))}
    </GridTemplate>
  );
};

export default InvestorGrid;
