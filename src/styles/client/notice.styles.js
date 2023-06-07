import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 75vw;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 4.1666vh;
  min-height: 74vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 90vw;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  margin-bottom: 10vh;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13.2vw;
    margin-bottom: 2.63vh;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
  font-family: ${(props) => props.theme.font.kr.regular};
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  margin-bottom: 5px;
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 0.3rem;
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  font-size: 0.9em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
  }

  tbody {
    tr {
      cursor: pointer;
      &:hover {
        td {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  td,
  th {
    padding: 0.7em 2em;
    vertical-align: middle;
    width: 20%;
    :first-child {
      text-align: left;
    }
    :nth-child(2) {
      text-align: left;
    }
    :last-child {
      text-align: right;
    }
  }
  td {
    background: #fff;
  }
  thead {
    font-weight: bold;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    td,
    th {
      @media screen and (${(props) => props.theme.size.sm}) {
        padding: 5px;
      }
    }
  }
`;
