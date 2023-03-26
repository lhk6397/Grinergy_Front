import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import { Pagination, SearchBar } from "../../components/index";

const Container = styled(motion.div)`
  width: 75vw;
  overflow: hidden;
  margin: 0 auto;
  min-height: 74vh;
  margin-bottom: 4.1666vh;
  margin-top: 16.55vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 90vw;
    margin-bottom: 2vh;
    margin-top: 0%;
  }
`;

const NewsGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 6%;
  grid-row-gap: 15vh;
  @media screen and (${(props) => props.theme.size.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 0;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 10vh;
  }
`;

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    @media screen and (${(props) => props.theme.size.sm}) {
      height: 220px;
    }
  }
  font-family: ${(props) => props.theme.font.kr.regular};
`;

const NewsTitle = styled.span`
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.85);
  }
`;

const NewsDescription = styled.p`
  display: block;
  font-size: 12.5px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.5);
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  padding-top: 2vh;
  font-size: 5vw;
  line-height: 4.5vw;
  letter-spacing: -0.015em;
  margin-bottom: 17.592vh;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    display: none;
  }
`;

const MobileStyledTitle = styled(StyledTitle)`
  display: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    margin: 0 auto;
    width: fit-content;
    text-align: left;
    font-size: 11.2vw;
    line-height: 11vw;
    margin-bottom: 5vh;
    padding-top: 5vh;
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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <StyledTitle>
        Innovation for tomorrow,
        <br />
        changes for next generation
      </StyledTitle>
      <MobileStyledTitle>
        Innovation,
        <br />
        for next generation
      </MobileStyledTitle>
      <FlexBox>
        <StyledSpan>
          전체 {data ? data.total : 0}건 | {currentPage} 페이지
        </StyledSpan>
        <SearchBar subject="news" />
      </FlexBox>
      <NewsGrid>
        {data &&
          data?.posts?.map((post, i) => (
            <a href={post.url} target="_blank" rel="noreferrer">
              <NewsCard key={post._id}>
                <img src={post.previewImg.filePath} alt={post.title} />
                <NewsTitle>{post.title}</NewsTitle>
                <NewsDescription
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.contents.slice(0, 150)),
                  }}
                />
              </NewsCard>
            </a>
          ))}
      </NewsGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default News;
