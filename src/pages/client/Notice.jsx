import { motion } from "framer-motion";
import moment from "moment";
import queryString from "query-string";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import { Pagination, SearchBar } from "../../components/index";

const Container = styled(motion.div)`
  width: 75vw;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 4.1666vh;
  min-height: 74vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 90vw;
  }
`;

const StyledTitle = styled.h1`
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

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
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

const Table = styled.table`
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

const Notice = () => {
  const pageSize = 10;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error } = useSWR(`/api/notice?page=${currentPage}`);
  const { keyword, page } = queryString.parse("notice");
  const totalPage = data ? parseInt(data.total / pageSize) : 0;

  useEffect(() => {
    // page 일치
    if (page && keyword) {
      if (currentPage !== page.toString()) {
        navigate(`/notice?page=${currentPage}`);
      }
    } else {
      navigate("/notice");
    }
  }, []);
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <StyledTitle>Notice</StyledTitle>
      <FlexBox>
        <StyledSpan>
          전체 {data && data?.total}건 | {currentPage} 페이지
        </StyledSpan>
        <SearchBar subject="notice" />
      </FlexBox>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.posts?.map((post, i) => (
              <tr
                key={post._id}
                onClick={() => navigate(`/notice/${post._id}`)}
              >
                <td>{i + 1}</td>
                <td>{post.title}</td>
                <td>{moment(post.createdAt).format("YYYY-MM-DD")}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default Notice;
