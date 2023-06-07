import DOMPurify from "dompurify";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";

import * as S from "../../styles/client/searchedNews.styles";
import { Pagination, SearchBar } from "../../components/index";

const SearchedNews = () => {
  const navigate = useNavigate();
  const pageSize = 10;
  const { search } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const { keyword, page } = queryString.parse(search);
  const { data } = useSWR(
    `/api/news/search?keyword=${keyword}&page=${currentPage}`
  );
  const totalPage = data ? parseInt(data.total / pageSize) : 0;

  useEffect(() => {
    if (page && keyword) {
      if (currentPage !== page.toString()) {
        navigate(`/news/search?keyword=${keyword}&page=${currentPage}`);
      }
    } else {
      navigate("/news");
    }
  }, []);

  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <S.StyledTitle>
        Innovation for tomorrow,
        <br />
        changes for next generation
      </S.StyledTitle>
      <S.MobileStyledTitle>
        Innovation,
        <br />
        for next generation
      </S.MobileStyledTitle>
      <S.FlexBox>
        <S.StyledSpan>
          전체 {data ? data.total : 0}건 | {currentPage} 페이지
        </S.StyledSpan>
        <SearchBar subject="news" />
      </S.FlexBox>
      <S.NewsGrid>
        {data &&
          data?.posts?.map((post, i) => (
            <a href={post.url} target="_blank" rel="noreferrer">
              <S.NewsCard key={post._id}>
                <img src={`/${post.previewImg.filePath}`} alt={post.title} />
                <S.NewsTitle>{post.title}</S.NewsTitle>
                <S.NewsDescription
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.contents.slice(0, 150)),
                  }}
                />
              </S.NewsCard>
            </a>
          ))}
      </S.NewsGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </S.Container>
  );
};

export default SearchedNews;
