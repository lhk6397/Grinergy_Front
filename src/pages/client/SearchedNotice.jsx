import queryString from "query-string";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";

import * as S from "../../styles/client/searchedNotice.styles";
import { Pagination, SearchBar } from "../../components/index";

const SearchedNotice = () => {
  const pageSize = 10;
  const navigate = useNavigate();
  const { search } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const { keyword, page } = queryString.parse(search);
  const { data } = useSWR(
    `/api/notice/search?keyword=${keyword}&page=${currentPage}`
  );
  const totalPage = data ? parseInt(data.total / pageSize) : 0;

  useEffect(() => {
    if (page && keyword) {
      if (currentPage !== page.toString()) {
        navigate(`/notice/search?keyword=${keyword}&page=${currentPage}`);
      }
    } else {
      navigate("/notice");
    }
  }, []);

  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <S.StyledTitle>notice</S.StyledTitle>
      <S.FlexBox>
        <S.StyledSpan>
          전체 {data ? data.total : 0}건 | {currentPage} 페이지
        </S.StyledSpan>
        <SearchBar subject="notice" />
      </S.FlexBox>
      <S.Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.ok &&
            data.posts.map((post, i) => (
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
      </S.Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </S.Container>
  );
};

export default SearchedNotice;
