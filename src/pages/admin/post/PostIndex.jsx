import React, { useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";
import moment from "moment";
import { useState } from "react";
import axios from "axios";
import Pagination from "../../../components/pagination";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 85%;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  overflow: hidden;
  padding: 2rem 1rem;
`;

const StyledSpan = styled.span`
  display: inline-block;
  border: 1px solid #7f8fa6;
  padding: 0.5rem 1rem;
  font-family: ${(props) => props.theme.font.kr.medium};
  font-size: 1.1458vw;
  background-color: #7f8fa6;
  color: black;
  border-radius: 10px;
  margin-bottom: 0.6rem;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-bottom: 0.6rem;
    font-size: 11pt;
    padding: 0.3rem 0.8rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  border: 1px solid #7f8fa6;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }

  th {
    padding: 1rem 0;
    background-color: #7f8fa6;
    font-family: ${(props) => props.theme.font.kr.bold};
  }

  td {
    overflow: hidden;
    padding: 5px;
    text-align: center;
    border: 1px solid #ddd;
    font-family: ${(props) => props.theme.font.kr.medium};
    vertical-align: middle;
    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
    svg {
      width: 1.2rem;
      height: 1.2rem;
      @media screen and (${(props) => props.theme.size.sm}) {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    :first-child {
      width: 25%;
    }
    :nth-child(2) {
      width: 30%;
    }
    :nth-child(3) {
      width: 15%;
    }
    :nth-child(4) {
      width: 10%;
    }
    :last-child {
      width: 10%;
    }
  }
`;
const PostIndex = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, mutate } = useSWR(`/api/post?page=${currentPage}`);
  const pageSize = 10;
  const totalPage = data ? parseInt(data.total / pageSize) : 0;

  const deletePost = async (postId) => {
    const res = await (
      await axios.delete(`/api/post/${postId}`, { withCredentials: true })
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
    <Container>
      <StyledSpan>
        전체 {data && data.total}건 | {currentPage} 페이지
      </StyledSpan>
      <Table>
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
          {data &&
            data.posts &&
            data?.posts?.map((post) => (
              <tr key={post._id}>
                <td onClick={() => navigate(`/notice/${post._id}`)}>
                  {post.title}
                </td>
                <td onClick={() => navigate(`/notice/${post._id}`)}>
                  {post.contents.length > 50
                    ? post.contents.substring(0, 50) + "..."
                    : post.contents}
                </td>
                <td>{moment(post.createdAt).format("YYYY-MM-DD")}</td>
                <td onClick={() => navigate(`/admin/post/${post._id}/update`)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="blue"
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
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={data?.total % pageSize ? totalPage + 1 : totalPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default PostIndex;
