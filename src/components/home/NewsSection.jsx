import DOMPurify from "dompurify";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";

const NewsWrapper = styled.div`
  padding: 20vh 3vw 20vh 14vw;
  display: flex;
  gap: 12vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    flex-direction: column;
    padding: 10vh 23px 3vh 23px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (${(props) => props.theme.size.sm}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const NewsCardWrapper = styled.div`
  display: flex;
  gap: 10px;
  font-family: ${(props) => props.theme.font.kr.medium};
  font-size: 18px;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: none;
  }
`;

const MobileNewsCardWrapper = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    font-family: ${(props) => props.theme.font.kr.regular};
    white-space: pre-wrap;
  }
`;

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  flex: 1;
  gap: 45px;
  @media screen and (${(props) => props.theme.size.sm}) {
    gap: 30px;
  }
`;

const NewsImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
`;

const NewsTitle = styled.span`
  font-size: 17px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 16px;
  }
`;

const NewsDescription = styled.p`
  display: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const TopicTitle = styled.h3`
  font-size: 45px;
  font-family: ${(props) => props.theme.font.eng.bold};
  line-height: 35px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 35px;
    line-height: 25px;
  }
`;

const MoreButton = styled.button`
  border: 1px solid ${(props) => props.theme.color.green};
  color: ${(props) => props.theme.color.green};
  font-family: ${(props) => props.theme.font.eng.bold};
  background-color: #fff;
  padding: 10px 0;
  width: 110px;
  font-size: 16px;
  cursor: pointer;
  span {
    position: relative;
    bottom: -2px;
  }
  :hover {
    background-color: ${(props) => props.theme.color.green};
    color: #fff;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    display: none;
  }
`;

const MoblieMoreButton = styled.span`
  display: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    font-size: 55px;
    color: ${(props) => props.theme.color.green};
    font-family: ${(props) => props.theme.font.eng.condensed};
    position: relative;
    bottom: -35px;
    cursor: pointer;
  }
`;

const NewsSection = () => {
  const navigate = useNavigate();
  const { data } = useSWR(`/api/news?page=1`);
  return (
    <NewsWrapper>
      <TitleWrapper>
        <TopicTitle>
          Grinergy
          <br />
          news
        </TopicTitle>
        <MoreButton onClick={() => navigate("/news")}>
          <span>MORE</span> +
        </MoreButton>
        <MoblieMoreButton onClick={() => navigate("/news")}>+</MoblieMoreButton>
      </TitleWrapper>
      <NewsCardWrapper>
        {data &&
          data?.posts?.length > 0 &&
          data?.posts?.slice(0, 3).map((news, idx) => (
            <a href={news.url} key={idx}>
              <NewsCard>
                <NewsImg src={news.previewImg.filePath} alt={news.title} />
                <NewsTitle>{news.title}</NewsTitle>
              </NewsCard>
            </a>
          ))}
      </NewsCardWrapper>
      <MobileNewsCardWrapper>
        <NewsCard>
          {data && data?.posts?.length > 0 && (
            <a href={data.posts[0].url} target="_blank" rel="noreferrer">
              <NewsCard>
                <NewsImg
                  src={data.posts[0].previewImg.filePath}
                  alt={data.posts[0].title}
                />
                <NewsTitle>{data.posts[0].title}</NewsTitle>
                <NewsDescription
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      data.posts[0].contents.slice(0, 200)
                    ),
                  }}
                />
              </NewsCard>
            </a>
          )}
        </NewsCard>
      </MobileNewsCardWrapper>
    </NewsWrapper>
  );
};

export default NewsSection;
