import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 10px 0;
  }
`;

const PageButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  color: #000;

  &.active {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
    }
  }

  &:hover {
    background-color: #ccc;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 5px 10px;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <PageButton
        key={i}
        className={i === currentPage ? "active" : ""}
        onClick={() => onPageChange(i)}
      >
        {i}
      </PageButton>
    );
  }

  return <PaginationContainer> {pageButtons} </PaginationContainer>;
};

export default Pagination;
