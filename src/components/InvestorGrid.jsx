import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import InvestorList from "../data/InvestorsList";

const GridTemplate = styled(motion.ul)`
  /* margin-top: 14.444vh; */
  /* margin-bottom: 16.574vh; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 80px;
  column-gap: 72px;
  @media screen and (${(props) => props.theme.size.md}) {
    row-gap: 60px;
    column-gap: 18px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    row-gap: 70px;
    column-gap: 10px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    row-gap: 60px;
  }
`;

const Img = styled.img`
  width: auto;
`;

const Investor = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  :first-child {
    ${Img} {
      max-height: 27px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 13px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 10px;
      }
    }
  }
  :nth-child(2) {
    ${Img} {
      max-height: 37px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 21px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 18px;
      }
    }
  }
  :nth-child(3) {
    ${Img} {
      position: relative;
      top: 13%;
      max-height: 29px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 15px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 12px;
      }
    }
  }
  :nth-child(4) {
    ${Img} {
      max-height: 34px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 17px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 13px;
      }
    }
  }
  :nth-child(5) {
    ${Img} {
      max-height: 31px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 14px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 11px;
      }
    }
  }
  :nth-child(6) {
    ${Img} {
      max-height: 25px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 11px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 8px;
      }
    }
  }
  :nth-child(7) {
    ${Img} {
      max-height: 24px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 10px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 7px;
      }
    }
  }
  :nth-child(8) {
    ${Img} {
      max-height: 33px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 16px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 13px;
      }
    }
  }
  :last-child {
    ${Img} {
      max-height: 29px;
      @media screen and (${(props) => props.theme.size.md}) {
        max-height: 16px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 12px;
      }
    }
  }
`;
const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const InvestorGrid = () => {
  return (
    <GridTemplate variants={list} animate={"show"} initial={"hidden"}>
      {InvestorList.map((investor, index) => (
        <Investor key={index} variants={item}>
          <Img src={investor} />
        </Investor>
      ))}
    </GridTemplate>
  );
};

export default InvestorGrid;
