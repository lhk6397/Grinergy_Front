import DOMPurify from "dompurify";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import download from "downloadjs";

import * as N from "../../styles/client/noticeDetail.styles";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate();
  const [fileData, setFileData] = useState([]);
  const { data, error } = useSWR(`/api/notice/${noticeId}`);

  useEffect(() => {
    if (data && data.ok) {
      return setFileData(data.post.files);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const status = error.response.status;
      if (status === 404 || status === 422) {
        alert(error.response.data.message);
        navigate("/notice");
      }
    }
  }, [error]);

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
    <N.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
    >
      <N.StyledTitle>notice</N.StyledTitle>
      {data && data.post && (
        <N.PostDetailContainer>
          <N.SmallContainer>
            <N.PostTitle>{data?.post?.title}</N.PostTitle>
            <N.PostDate>
              {moment(data.post.createdAt).format("YYYY-MM-DD")}
            </N.PostDate>
          </N.SmallContainer>
          <div className="ql-snow">
            {typeof window !== "undefined" && (
              <N.PostContent
                className="ql-editor"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.post.contents),
                }}
              />
            )}
          </div>
          <N.AttachmentData>
            <N.AttachmentTitle>첨부파일</N.AttachmentTitle>
            {fileData && fileData.length > 0 ? (
              <N.FileList>
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
              </N.FileList>
            ) : (
              "첨부파일 없음"
            )}
          </N.AttachmentData>
          <N.NavigateBtn onClick={() => navigate("/notice")}>
            목록
          </N.NavigateBtn>
        </N.PostDetailContainer>
      )}
    </N.Container>
  );
};

export default NoticeDetail;
