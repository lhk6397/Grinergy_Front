import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as C from "../../../styles/admin/news/newsCreate.styles";
import useMutation from "../../../utils/useMutation";
import { Editor } from "../../../components/admin/index";

const NewsCreate = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const [imageUploading, setImageUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  };
  const [uploadNotice, { loading, data }] = useMutation(`/api/news`);
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
      setImageUploading(true);
      try {
        const res = await axios.post(`/api/news/uploadImage`, formData, config);
        if (res?.data.ok) {
          setImageUploading(false);
          const previewImg = res.data.image;
          return uploadNotice({ title, url, contents, previewImg });
        } else {
          alert("파일 저장 실패!");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      uploadNotice({ title, url, contents });
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (photo?.length > 0) {
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
    <C.StyledForm onSubmit={handleSubmit(onValid)}>
      <C.StyledLabel as="span">미리보기 이미지 (5MB 이하)</C.StyledLabel>
      {previewImage ? (
        <C.PreviewImage src={previewImage} alt="previewImage" />
      ) : (
        <C.PreviewImageSelect htmlFor="file">
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
        </C.PreviewImageSelect>
      )}
      <input
        {...register("file", { required: true })}
        style={{ display: "none" }}
        type="file"
        id="file"
      />
      <C.StyledLabel htmlFor="title">제목</C.StyledLabel>
      <C.StyledInput
        {...register("title", { required: true })}
        type="text"
        id="title"
      />
      <C.StyledLabel htmlFor="url">뉴스 URL</C.StyledLabel>
      <C.StyledInput
        {...register("url", { required: true })}
        type="text"
        id="url"
      />
      <C.StyledLabel htmlFor="contents">내용</C.StyledLabel>
      <C.EditorBox>
        <Editor handleChange={handleChange} id="contents" />
      </C.EditorBox>
      <C.StyledBtn>{imageUploading ? "등록 중..." : "등록"}</C.StyledBtn>
    </C.StyledForm>
  );
};

export default NewsCreate;
