import queryString from "query-string";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import SearchBar from "../../../components/SearchBar";
import Pagination from "../../../components/pagination";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  overflow-x: scroll;
  padding: 2rem 1rem;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
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
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 0.3rem;
  }
`;

const Table = styled.table`
  table-layout: fixed;
  font-size: 0.9em;
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  font-family: ${(props) => props.theme.font.kr.regular};
  border: 1px solid rgba(0, 0, 0, 0.3);
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
  }
  tbody {
    tr {
      cursor: pointer;
      &:hover {
        td {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  th {
    text-align: left;
  }
  td,
  th {
    padding: 1em 0.5em;
    vertical-align: middle;
    text-align: center;
    width: 20%;
  }

  td {
    background: #fff;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  thead {
    font-family: ${(props) => props.theme.font.kr.bold};
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    td,
    th {
      padding: 10px;
      @media screen and (${(props) => props.theme.size.sm}) {
        padding: 5px;
      }
    }
  }
`;

const AdminSearchedNews = () => {
  const pageSize = 10;
  const navigate = useNavigate();
  const { search } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const { keyword, page } = queryString.parse(search);
  const { data, mutate } = useSWR(
    `/api/post/search?keyword=${keyword}&page=${currentPage}`
  );
  const totalPage = data ? parseInt(data.total / pageSize) : 0;

  useEffect(() => {
    // page 일치
    if (page && keyword) {
      if (currentPage !== page.toString()) {
        navigate(`/admin/post/search?keyword=${keyword}&page=${currentPage}`);
      }
    } else {
      navigate("/admin");
    }
  }, []);

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
      <FlexBox>
        <StyledSpan>
          전체 {data && data.total}건 | {currentPage} 페이지
        </StyledSpan>
        <SearchBar isAdmin />
      </FlexBox>
      <Table>
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "12.5%" }} />
          <col style={{ width: "12.5%" }} />
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
          {data &&
            data.posts &&
            data?.posts?.map((post) => {
              const contentsText = post.contents.replace(/<[^>]*>?/g, "");
              return (
                <tr key={post._id}>
                  <td onClick={() => navigate(`/notice/${post._id}`)}>
                    {post.title.length > 20
                      ? post.title.substring(0, 20) + "..."
                      : post.title}
                  </td>
                  <td onClick={() => navigate(`/notice/${post._id}`)}>
                    {contentsText.length > 30
                      ? contentsText.substring(0, 30) + "..."
                      : contentsText}
                  </td>
                  <td>{moment(post.createdAt).format("YYYY-MM-DD")}</td>
                  <td
                    onClick={() => navigate(`/admin/post/${post._id}/update`)}
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
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage + 1}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

// Create a pagination component that uses only styled-components.
export default AdminSearchedNews;
