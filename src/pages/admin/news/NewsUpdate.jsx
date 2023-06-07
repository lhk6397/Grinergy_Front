import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

import * as U from "../../../styles/admin/news/newsCreate.styles";
import useMutation from "../../../utils/useMutation";
import { Editor } from "../../../components/admin/index";

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
    <U.StyledForm onSubmit={handleSubmit(onValid)}>
      <U.StyledLabel as="span">미리보기 이미지</U.StyledLabel>
      {previewImage ? (
        <U.PreviewImage src={previewImage} alt="previewImage" />
      ) : (
        <>
          <U.PreviewImageSelect htmlFor="file">
            {currData?.post && (
              <U.PreviewImage
                src={`/${currData?.post?.previewImg?.filePath}`}
                alt=""
                // style={{ margin: "0" }}
              />
            )}
          </U.PreviewImageSelect>
        </>
      )}
      <input
        {...register("file")}
        style={{ display: "none" }}
        type="file"
        id="file"
      />
      <U.StyledLabel htmlFor="title">제목</U.StyledLabel>
      <U.StyledInput
        {...register("title", { required: true })}
        type="text"
        id="title"
      />
      <U.StyledLabel htmlFor="url">뉴스 URL</U.StyledLabel>
      <U.StyledInput
        {...register("url", { required: true })}
        type="text"
        id="url"
      />
      <U.StyledLabel htmlFor="contents">내용</U.StyledLabel>
      <U.EditorBox>
        <Editor
          value={currData && currData.post.contents}
          handleChange={handleChange}
          id="contents"
        />
      </U.EditorBox>
      <U.StyledBtn onClick={handleSubmit(onValid)}>수정</U.StyledBtn>
    </U.StyledForm>
  );
};

export default NewsUpdate;
