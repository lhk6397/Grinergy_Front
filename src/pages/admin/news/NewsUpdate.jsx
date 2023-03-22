import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useMutation from "../../../utils/useMutation";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
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
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  gap: 10px;
`;

const PreviewImage = styled.img`
  width: 350px;
  aspect-ratio: 350/250;
  margin: 0 auto;
  object-fit: contain;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
  }
`;

const PreviewImageSelect = styled.label`
  width: 350px;
  aspect-ratio: 350/250;
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
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
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
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.font.kr.regular};
  &[type="file"] {
    margin-bottom: 0px;
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

const NewsUpdate = () => {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const { data: currData } = useSWR(`/api/news/${newsId}`);
  const [previewImage, setPreviewImage] = useState("");
  const [updateNews, { loading, data }] = useMutation(`/api/news/${newsId}`);
  const { register, handleSubmit, setValue, trigger, watch } = useForm({
    mode: "onChange",
  });
  const photo = watch("file");
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
    withCredentials: true,
  };

  function handleChange(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }
  useEffect(() => {
    if (currData?.post?.title) setValue("title", currData.post.title);
    if (currData?.post?.url) setValue("url", currData.post.url);
  }, [currData, setValue]);

  const onValid = async ({ file, title, url, contents }) => {
    if (loading) return;
    if (file && file.length > 0) {
      const formData = new FormData();
      formData.append("file", file[0]);
      const res = await axios.post(`/api/news/uploadImage`, formData, config);
      if (res.data.ok) {
        const image = res.data.image;
        return updateNews({
          title,
          url,
          contents,
          image,
        });
      } else {
        alert("파일 저장 실패!");
      }
    } else {
      updateNews({ title, url, contents });
    }
  };

  useEffect(() => {
    if (data) {
      if (data?.ok) {
        navigate("/admin/news");
      } else {
        alert("게시글 수정에 실패하였습니다.");
      }
    }
  }, [data, navigate]);

  useEffect(() => {
    const uploadImage = async () => {
      if (photo) {
        const file = photo[0];
        setPreviewImage(URL.createObjectURL(file));
      }
    };
    uploadImage();
  }, [photo]);

  return (
    <StyledForm onSubmit={handleSubmit(onValid)}>
      <StyledLabel as="span">미리보기 이미지</StyledLabel>
      {previewImage ? (
        <PreviewImage src={previewImage} alt="previewImage" />
      ) : (
        <>
          <PreviewImageSelect htmlFor="file">
            {currData?.post && (
              <PreviewImage
                src={`/${currData?.post?.previewImg?.filePath}`}
                alt=""
                // style={{ margin: "0" }}
              />
            )}
          </PreviewImageSelect>
        </>
      )}
      <input
        {...register("file")}
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
        <Editor
          value={currData && currData.post.contents}
          handleChange={handleChange}
          id="contents"
        />
      </EditorBox>
      <StyledBtn onClick={handleSubmit(onValid)}>수정</StyledBtn>
    </StyledForm>
  );
};

export default NewsUpdate;
