import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import download from "downloadjs";

const Container = styled(motion.div)`
  width: 50%;
  font-family: ${(props) => props.theme.font.kr.regular};
  overflow: hidden;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
  }
`;

const PostDetailContainer = styled.div`
  /* font-family: ${(props) => props.theme.font.kr.regular}; */
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  .ql-snow {
    .ql-editor {
      padding: 0;
    }
  }
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
`;

const PostTitle = styled.h1`
  font-size: 1.5rem;
  letter-spacing: -0.05em;
  /* position: relative;
  bottom: -5px; */
  font-family: ${(props) => props.theme.font.kr.bold};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1rem;
  }
`;
const PostDate = styled.p`
  font-size: 14px;
  color: #666;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
  }
`;

const PostContent = styled.div`
  margin-top: 2rem;
  line-height: 2em;
  font-size: 0.75rem;
  overflow-y: hidden;
  * {
    font: revert;
    .ql-font-NotoSansKR-Regular {
      font-family: "NotoSansKR-Regular";
    }
    .ql-font-NotoSansKR-Medium {
      font-family: "NotoSansKR-Medium";
    }
    .ql-font-NotoSansKR-Bold {
      font-family: "NotoSansKR-Bold";
    }
    .ql-font-UniversLTPro-BoldCond {
      font-family: "UniversLTPro-BoldCond";
    }
    .ql-font-UniversLTPro-Condensed {
      font-family: "UniversLTPro-Condensed";
    }
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 12px;
    line-height: 1.7em;
  }
`;

const AttachmentData = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 11px;
  }
`;

const AttachmentTitle = styled.h3`
  font-size: 0.75rem;
  color: black;
  margin-bottom: 10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 11px;
    margin-bottom: 8px;
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
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
    padding: 0;
    gap: 3px;
  }

  li {
    width: fit-content;
    cursor: pointer;
    font-size: 0.75rem;
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
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.font.kr.medium};
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.6rem;
    padding: 0.3rem 0.8rem;
  }
`;

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate();
  const [fileData, setFileData] = useState([]);
  const { data } = useSWR(`/api/notice/${noticeId}`);
  useEffect(() => {
    if (data) {
      if (data.ok) {
        setFileData(data.post.files);
      } else if (!data.ok) {
        alert("게시글 정보가 없습니다");
        navigate("/notice");
      }
    }
  }, [data, navigate]);

  const downloadFile = async (filePath, fileName) => {
    const res = await fetch(`/api/notice/downloadFile`, {
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
          <SmallContainer>
            <PostTitle>{data?.post?.title}</PostTitle>
            <PostDate>
              {moment(data.post.createdAt).format("YYYY-MM-DD")}
            </PostDate>
          </SmallContainer>
          <div className="ql-snow">
            {typeof window !== "undefined" && (
              <PostContent
                className="ql-editor"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.post.contents),
                }}
              />
            )}
          </div>
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

export default NoticeDetail;
