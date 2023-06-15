import DOMPurify from "dompurify";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

import * as N from "../../styles/client/news.styles";
import { Pagination, SearchBar } from "../../components/index";

const News = () => {
  const navigate = useNavigate();
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSWR(`/api/news?page=${currentPage}`);
  const { keyword, page } = queryString.parse("news");
  const totalPage = data ? parseInt(data.total / pageSize) : 0;

  useEffect(() => {
    if (page && keyword) {
      if (currentPage !== page.toString()) {
        navigate(`/news?page=${currentPage}`);
      }
    } else {
      navigate("/news");
    }
  }, []);

  return (
    <N.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <N.StyledTitle>
        Innovation for tomorrow,
        <br />
        changes for next generation
      </N.StyledTitle>
      <N.MobileStyledTitle>
        Innovation,
        <br />
        for next generation
      </N.MobileStyledTitle>
      <N.FlexBox>
        <N.StyledSpan>
          전체 {data ? data.total : 0}건 | {currentPage} 페이지
        </N.StyledSpan>
        <SearchBar subject="news" />
      </N.FlexBox>
      <N.NewsGrid>
        {data &&
          data?.posts?.map((post, i) => (
            <a key={post._id} href={post.url} target="_blank" rel="noreferrer">
              <N.NewsCard>
                <img src={`/${post?.previewImg.filePath}`} alt={post.title} />
                <N.NewsTitle>{post.title}</N.NewsTitle>
                <N.NewsDescription
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.contents.slice(0, 150)),
                  }}
                />
              </N.NewsCard>
            </a>
          ))}
      </N.NewsGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </N.Container>
  );
};

export default News;
