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
  column-gap: 25px;
  @media screen and (${(props) => props.theme.size.sm}) {
    row-gap: 70px;
    column-gap: 10px;
  }
  /* @media screen and (${(props) => props.theme.size.md}) {
    height: 55vh;
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
  } */
`;

const Img = styled.img`
  width: auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: auto;
  }
`;

const Investor = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* height: 10vh; */
  :first-child {
    ${Img} {
      max-height: 30px;
      @media screen and (${(props) => props.theme.size.sm}) {
        max-height: 13px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 10px;
      }
    }
  }
  :nth-child(2) {
    ${Img} {
      max-height: 40px;
      @media screen and (${(props) => props.theme.size.sm}) {
        max-height: 21px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 18px;
      }
    }
  }
  :nth-child(3) {
    ${Img} {
      max-height: 32px;
      @media screen and (${(props) => props.theme.size.sm}) {
        max-height: 15px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 12px;
      }
    }
  }
  :nth-child(4) {
    ${Img} {
      max-height: 44px;
      @media screen and (${(props) => props.theme.size.sm}) {
        max-height: 17px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 14px;
      }
    }
  }
  :nth-child(5) {
    ${Img} {
      max-height: 31px;
      @media screen and (${(props) => props.theme.size.sm}) {
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
      @media screen and (${(props) => props.theme.size.sm}) {
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
      @media screen and (${(props) => props.theme.size.sm}) {
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
      @media screen and (${(props) => props.theme.size.sm}) {
        max-height: 16px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 13px;
      }
    }
  }
  :last-child {
    ${Img} {
      max-height: 40px;
      @media screen and (${(props) => props.theme.size.sm}) {
        max-height: 16px;
      }
      @media screen and (${(props) => props.theme.size.xs}) {
        max-height: 13px;
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
