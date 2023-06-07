import moment from "moment";
import queryString from "query-string";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

import * as N from "../../styles/client/notice.styles";
import { Pagination, SearchBar } from "../../components/index";

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
    <N.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <N.StyledTitle>Notice</N.StyledTitle>
      <N.FlexBox>
        <N.StyledSpan>
          전체 {data ? data.total : 0}건 | {currentPage} 페이지
        </N.StyledSpan>
        <SearchBar subject="notice" />
      </N.FlexBox>
      <N.Table>
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
      </N.Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </N.Container>
  );
};

export default Notice;
