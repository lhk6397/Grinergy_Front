import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import InvestorList from "../data/InvestorsList";

const GridTemplate = styled(motion.ul)`
  margin: 0 auto;
  margin-top: 14.444vh;
  /* margin-bottom: 16.574vh; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4.462vh;
  column-gap: 4.687vw;
  width: 42%;

  @media screen and (${(props) => props.theme.size.md}) {
    height: 55vh;
    /* margin-top: 9.444vh;
    margin-bottom: 7.574vh; */
    row-gap: 0;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 60%;
    height: 30vh;
    margin-top: 9vh;
    row-gap: 0;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-top: 5vh;
  }
`;

const Investor = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 10vh;
`;

const Img = styled.img`
  width: 200%;
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
