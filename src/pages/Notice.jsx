import { motion } from "framer-motion";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import Pagination from "../components/pagination";

const Container = styled(motion.div)`
  width: 75vw;
  overflow: hidden;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 90vw;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 6.25vw;
  letter-spacing: -0.015em;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 13.2vw;
    margin-bottom: 2.63vh;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
  font-family: ${(props) => props.theme.font.kr.regular};
  font-size: 0.8rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 10px;
  margin-bottom: 0.6rem;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 0.6rem;
    font-size: 11pt;
    padding: 0.3rem 0.8rem;
  }
`;

const Table = styled.table`
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 0.9em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  font-family: ${(props) => props.theme.font.kr.regular};
  tbody {
    tr {
      cursor: pointer;
      &:hover {
        border: 3px solid rgba(0, 0, 0, 0.3);
      }
    }
  }

  th {
    text-align: left;
  }
  thead {
    font-weight: bold;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
  }

  td,
  th {
    padding: 1em 0.5em;
    vertical-align: middle;
    text-align: center;
  }

  td {
    background: #fff;
  }
`;

const Notice = () => {
  const pageSize = 10;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/post?page=${currentPage}`
  );
  const totalPage = data ? parseInt(data.total / pageSize) : 0;
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <StyledTitle>notice</StyledTitle>
      <StyledSpan>
        전체 {data && data.total}건 | {currentPage} 페이지
      </StyledSpan>
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
            data.posts.map((post, i) => (
              <tr key={post._id} onClick={() => navigate(`/post/${post._id}`)}>
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

// Create a pagination component that uses only styled-components.
export default Notice;
