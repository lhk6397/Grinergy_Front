import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Editor } from "../../../components/admin/index";
import * as C from "../../../styles/admin/notice/noticeCreate.styles";
import useMutation from "../../../utils/useMutation";

const NoticeCreate = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const [uploadNotice, { loading, data, error }] = useMutation(`/api/notice`);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
    withCredentials: true,
  };
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  function handleChange(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  const onValid = async ({ file, title, contents }) => {
    if (loading) return;
    if (file && file.length > 0) {
      for (let i = 0; i < file.length; i++) {
        formData.append("file", file[i]);
      }
      const res = await axios.post(`/api/notice/uploadFiles`, formData, config);
      if (res?.data.ok) {
        const fdata = res.data.fdata;
        return uploadNotice({ title, contents, files: fdata });
      } else {
        alert("파일 저장 실패!");
      }
    } else {
      uploadNotice({ title, contents });
    }
  };

  useEffect(() => {
    if (data && data.ok) navigate("/admin");
  }, [data, navigate]);

  useEffect(() => {
    if (error && error.response.data) {
      alert(error.response.data.message);
    }
  }, [error]);

  return (
    <C.StyledForm onSubmit={handleSubmit(onValid)}>
      <C.StyledLabel htmlFor="title">제목</C.StyledLabel>
      <C.StyledInput
        {...register("title", { required: true })}
        type="text"
        id="title"
      />
      <C.StyledLabel htmlFor="contents">내용</C.StyledLabel>
      <C.EditorBox>
        <Editor handleChange={handleChange} id="contents" />
      </C.EditorBox>
      <C.StyledLabel htmlFor="file">첨부파일</C.StyledLabel>
      <C.StyledInput {...register("file")} type="file" id="file" multiple />
      <C.StyledBtn>등록</C.StyledBtn>
    </C.StyledForm>
  );
};

export default NoticeCreate;
