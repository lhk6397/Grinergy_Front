import { motion } from "framer-motion";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import download from "downloadjs";

const Container = styled(motion.div)`
  width: 50%;
  overflow: hidden;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
  }
`;

const PostDetailContainer = styled.div`
  font-family: ${(props) => props.theme.font.kr.regular};
  background-color: white;
  margin: 0 auto;
  padding: 20px;
`;

const PostTitle = styled.h1`
  font-size: 3.5vw;
  font-family: ${(props) => props.theme.font.kr.medium};
  margin-bottom: 1rem;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 2.5rem;
  }
`;
const PostDate = styled.p`
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  svg {
    width: 20px;
    height: 20px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 12px;
  }
`;

const PostContent = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  line-height: 1.5em;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1rem;
  }
`;

const AttachmentData = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
`;

const AttachmentTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1rem;
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

const FileList = styled.ul`
  padding: 10px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
    padding: 0;
  }

  li {
    width: fit-content;
    cursor: pointer;
    font-size: 1rem;
    justify-content: space-between;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;

const NavigateBtn = styled.button`
  margin-top: 10px;
  margin-left: auto;
  padding: 0.5rem 1rem;
  display: block;
  background-color: #4c4f6f;
  border: none;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.font.kr.medium};
  &:hover {
    background-color: #41445f;
  }
`;

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [fileData, setFileData] = useState([]);
  const { data } = useSWR(`/api/post/${postId}`);
  useEffect(() => {
    if (data) {
      if (data.ok) {
        setFileData(data.post.files);
      } else if (!data.ok) {
        alert("게시글 정보가 없습니다");
        navigate("/");
      }
    }
  }, [data, navigate]);

  const downloadFile = async (filePath, fileName) => {
    const res = await fetch(`/api/post/downloadFile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filePath,
        fileName,
      }),
    });
    const blob = await res.blob();
    download(blob, fileName);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
    >
      <StyledTitle>notice</StyledTitle>
      {data && data.post && (
        <PostDetailContainer>
          <PostTitle>{data?.post?.title}</PostTitle>
          <PostDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {moment(data.post.createdAt).format("YYYY-MM-DD")}
          </PostDate>
          {/* <PostContent>{data.post.contents}</PostContent> */}
          <PostContent>
            {data.post.contents.split("\n").map((line, i) => {
              return (
                <span key={i}>
                  {line}
                  <br />
                </span>
              );
            })}
          </PostContent>
          <AttachmentData>
            <AttachmentTitle>첨부파일</AttachmentTitle>
            {fileData && fileData.length > 0 ? (
              <FileList>
                {fileData.map((file, i) => (
                  <li key={i}>
                    <span
                      // href={`/${file.filePath}`}
                      // download={file.fileName}
                      onClick={() => downloadFile(file.filePath, file.fileName)}
                    >
                      {file.fileName.length > 20
                        ? file.fileName.substring(0, 10) +
                          "..." +
                          file.fileName.substring(file.fileName.length - 10)
                        : file.fileName}
                    </span>
                  </li>
                ))}
              </FileList>
            ) : (
              "첨부파일 없음"
            )}
          </AttachmentData>
          <NavigateBtn onClick={() => navigate("/notice")}>목록</NavigateBtn>
        </PostDetailContainer>
      )}
    </Container>
  );
};

export default PostDetail;
