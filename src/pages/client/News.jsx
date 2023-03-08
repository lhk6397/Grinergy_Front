import { motion } from "framer-motion";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Pagination from "../../components/pagination";
import SearchBar from "../../components/SearchBar";

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

const StyledGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10%;
  @media screen and (${(props) => props.theme.size.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const GridItemContents = styled.div`
  width: 100%;
`;

const News = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSWR(`/api/news?page=${currentPage}`);
  const totalPage = data ? parseInt(data.total / pageSize) : 0;
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <StyledTitle>News</StyledTitle>
      <FlexBox>
        <StyledSpan>
          전체 {data && data.total}건 | {currentPage} 페이지
        </StyledSpan>
        <SearchBar subject="news" />
      </FlexBox>
      <StyledGrid>
        {data &&
          data.posts.map((post, i) => (
            <GridItem
              key={post._id}
              // onClick={() => navigate(`/notice/${post._id}`)}
            >
              <img src={post.previewImg.filePath} alt={post.title} />
              <GridItemContents>
                <span>{post.title}</span>
                <p>{post.contents}</p>
                <span>{moment(post.createdAt).format("YYYY-MM-DD")}</span>
              </GridItemContents>
            </GridItem>
          ))}
      </StyledGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

// Create a pagination component that uses only styled-components.
export default News;
