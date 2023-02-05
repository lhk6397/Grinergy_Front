import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useMutation from "../../../utils/useMutation";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

const StyledForm = styled.form`
  background-color: white;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-between; */
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  gap: 10px;
`;

const StyledLabel = styled.label`
  font-size: 0.9375rem;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.font.kr.regular};
  &[type="file"] {
    background-color: #f5f5f5;
    padding: 10px 20px;
    border: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.font.kr.regular};
  resize: none;
`;

const StyledBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  width: fit-content;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid black;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }
  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const PostUpdate = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const { postId } = useParams();
  const [fileData, setFileData] = useState([]);
  const { data: currData } = useSWR(`/api/post/${postId}`);
  const [updateNotice, { loading, data }] = useMutation(`/api/post/${postId}`);
  const { register, handleSubmit, setValue, watch } = useForm();

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
    withCredentials: true,
  };

  useEffect(() => {
    if (currData?.post?.title) setValue("title", currData.post.title);
    if (currData?.post?.title) setValue("contents", currData.post.contents);
  }, [currData, setValue]);

  const onValid = async ({ file, title, contents }) => {
    if (loading) return;
    if (file && file.length > 0) {
      for (let i = 0; i < file.length; i++) {
        formData.append("file", file[i]);
      }
      const res = await axios.post(`/api/post/uploadFiles`, formData, config);
      if (res.data.ok) {
        const fdata = res.data.fdata;
        return updateNotice({ title, contents, files: fdata });
      } else {
        alert("파일 저장 실패!");
      }
    } else {
      updateNotice({ title, contents });
    }
  };

  useEffect(() => {
    const data = [];
    if (watch("file").length > 0) {
      for (let i = 0; i < watch("file").length; i++) {
        formData.append("file", watch("file")[i]);
        data.push(watch("file")[i].name);
      }
      setFileData(data);
    }
  }, [watch("file")]);

  useEffect(() => {
    if (data) {
      if (data.ok) {
        navigate("/admin");
      } else {
        alert("게시글 수정에 실패하였습니다.");
      }
    }
  }, [data, navigate]);

  return (
    <StyledForm onSubmit={handleSubmit(onValid)}>
      <StyledLabel htmlFor="title">제목</StyledLabel>
      <StyledInput
        {...register("title", { required: true })}
        type="text"
        id="title"
      />
      <StyledLabel htmlFor="contents">내용</StyledLabel>
      <StyledTextarea
        {...register("contents", { required: true })}
        id="contents"
      />
      <StyledLabel htmlFor="file">첨부파일</StyledLabel>
      <StyledInput {...register("file")} type="file" id="file" multiple />
      <StyledBtn>수정</StyledBtn>
    </StyledForm>
  );
};

export default PostUpdate;
