import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useMutation from "../../../utils/useMutation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Editor } from "../../../components/admin/index";
import { useState } from "react";

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

const PreviewImage = styled.img`
  width: 240px;
  height: 200px;
  margin: 0 auto;
  object-fit: contain;
`;

const PreviewImageSelect = styled.label`
  width: 240px;
  height: 200px;
  cursor: pointer;
  font-family: ${(props) => props.theme.font.kr.regular};
  font-size: 0.9375rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 10px;
  color: #ccc;
  margin: 0 auto;
  :hover {
    border-color: #000;
    color: #000;
  }
  svg {
    width: 2.5rem;
  }
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
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.font.kr.regular};
  &[type="file"] {
    background-color: #f5f5f5;
    padding: 10px 20px;
    border: none;
  }
`;

const EditorBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
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

const NewsCreate = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState("");
  const [uploadNotice, { loading, data }] = useMutation(`/api/news`);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
    withCredentials: true,
  };
  const { register, handleSubmit, setValue, trigger, watch } = useForm({
    mode: "onChange",
  });
  const photo = watch("file");

  function handleChange(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }
  const onValid = async ({ file, title, url, contents }) => {
    if (loading) return;
    if (file) {
      formData.append("file", file[0]);
      const res = await axios.post(`/api/news/uploadImage`, formData, config);
      if (res?.data.ok) {
        const previewImg = res.data.image;
        return uploadNotice({ title, url, contents, previewImg });
      } else {
        alert("파일 저장 실패!");
      }
    } else {
      uploadNotice({ title, url, contents });
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (photo) {
        const file = photo[0];
        setPreviewImage(URL.createObjectURL(file));
      }
    };
    uploadImage();
  }, [photo]);

  useEffect(() => {
    if (data) {
      if (data.ok) {
        navigate("/admin/news");
      } else {
        alert("게시글 등록에 실패하였습니다.");
      }
    }
  }, [data, navigate]);

  return (
    <StyledForm onSubmit={handleSubmit(onValid)}>
      <StyledLabel as="span">미리보기 이미지</StyledLabel>
      {previewImage ? (
        <PreviewImage src={previewImage} alt="previewImage" />
      ) : (
        <PreviewImageSelect htmlFor="file">
          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>커버 이미지</span>
        </PreviewImageSelect>
      )}
      <input
        {...register("file", { required: true })}
        style={{ display: "none" }}
        type="file"
        id="file"
      />
      <StyledLabel htmlFor="title">제목</StyledLabel>
      <StyledInput
        {...register("title", { required: true })}
        type="text"
        id="title"
      />
      <StyledLabel htmlFor="url">뉴스 URL</StyledLabel>
      <StyledInput
        {...register("url", { required: true })}
        type="text"
        id="url"
      />
      <StyledLabel htmlFor="contents">내용</StyledLabel>
      <EditorBox>
        <Editor handleChange={handleChange} id="contents" />
      </EditorBox>
      <StyledBtn>등록</StyledBtn>
    </StyledForm>
  );
};

export default NewsCreate;
