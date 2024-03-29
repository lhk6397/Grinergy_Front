import React, { useState, useEffect } from "react";
import useSWR from "swr";
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as I from "../../../styles/admin/notice/noticeIndex.styles";
import { SearchBar, Pagination } from "../../../components/index";

const NoticeIndex = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, mutate } = useSWR(`/api/notice?page=${currentPage}`);
  const pageSize = 10;
  const totalPage = data ? parseInt(data.total / pageSize) : 0;
  const deletePost = async (noticeId) => {
    const res = await (
      await axios.delete(`/api/notice/${noticeId}`, { withCredentials: true })
    ).data;
    if (res.ok) {
      mutate();
    } else {
      alert("게시글 삭제 실패");
    }
  };

  useEffect(() => {
    if (data) {
      if (!data?.ok) {
        alert("게시글 정보가 없습니다");
      }
    }
  }, [data]);

  return (
    <I.Container>
      <I.FlexBox>
        <I.StyledSpan>
          전체 {data && data.total}건 | {currentPage} 페이지
        </I.StyledSpan>
        <SearchBar isAdmin subject={"notice"} />
      </I.FlexBox>
      <I.Table>
        <colgroup>
          <col style={{ width: "40%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "5%" }} />
          <col style={{ width: "5%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>작성일</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {data?.posts?.map((post) => {
            const contentsText = post.contents.replace(/<[^>]*>?/g, "");
            return (
              <tr key={post._id}>
                <td onClick={() => navigate(`/notice/${post._id}`)}>
                  {post.title.length > 20
                    ? post.title.substring(0, 20) + "..."
                    : post.title}
                </td>
                <td onClick={() => navigate(`/notice/${post._id}`)}>
                  {/* {post.contents.length > 30
                    ? post.contents.substring(0, 30) + "..."
                    : post.contents} */}
                  {contentsText.length > 30
                    ? contentsText.substring(0, 30) + "..."
                    : contentsText}
                </td>
                <td>{moment(post.createdAt).format("YYYY-MM-DD")}</td>
                <td
                  onClick={() => navigate(`/admin/notice/${post._id}/update`)}
                >
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </td>
                <td onClick={() => deletePost(post._id)}>
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </I.Table>
      <Pagination
        currentPage={currentPage}
        totalPages={data?.total % pageSize ? totalPage + 1 : totalPage}
        onPageChange={setCurrentPage}
      />
    </I.Container>
  );
};

export default NoticeIndex;
