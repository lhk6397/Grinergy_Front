import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  overflow-x: scroll;
  padding: 2rem 1rem;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
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
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 0.3rem;
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  font-size: 0.9em;
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  font-family: ${(props) => props.theme.font.kr.regular};
  border: 1px solid rgba(0, 0, 0, 0.3);
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
  th {
    text-align: left;
  }
  td,
  th {
    padding: 1em 0.5em;
    vertical-align: middle;
    text-align: center;
    width: 20%;
  }

  td {
    background: #fff;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  thead {
    font-family: ${(props) => props.theme.font.kr.bold};
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    td,
    th {
      padding: 10px;
      @media screen and (${(props) => props.theme.size.sm}) {
        padding: 5px;
      }
    }
  }
`;
