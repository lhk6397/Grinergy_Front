import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

import * as U from "../../../styles/admin/notice/noticeCreate.styles";
import useMutation from "../../../utils/useMutation";
import { Editor } from "../../../components/admin/index";

const NoticeUpdate = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const { data: currData } = useSWR(`/api/notice/${noticeId}`);
  const [updateNotice, { loading, data }] = useMutation(
    `/api/notice/${noticeId}`
  );
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

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
  }, [currData, setValue]);

  const onValid = async ({ file, title, contents, deleteFiles }) => {
    if (loading) return;
    if (file && file.length > 0) {
      for (let i = 0; i < file.length; i++) {
        formData.append("file", file[i]);
      }
      const res = await axios.post(`/api/notice/uploadFiles`, formData, config);
      if (res.data.ok) {
        const fdata = res.data.fdata;
        return updateNotice({ title, contents, files: fdata, deleteFiles });
      } else {
        alert("파일 저장 실패!");
      }
    } else {
      updateNotice({ title, contents, deleteFiles });
    }
  };

  useEffect(() => {
    if (data) {
      if (data?.ok) {
        navigate("/admin");
      } else {
        alert("게시글 수정에 실패하였습니다.");
      }
    }
  }, [data, navigate]);

  return (
    <U.StyledForm onSubmit={handleSubmit(onValid)}>
      <U.StyledLabel htmlFor="title">제목</U.StyledLabel>
      <U.StyledInput
        {...register("title", { required: true })}
        type="text"
        id="title"
      />
      <U.StyledLabel htmlFor="contents">내용</U.StyledLabel>
      <U.EditorBox>
        <Editor
          value={currData && currData.post.contents}
          handleChange={handleChange}
          id="contents"
        />
      </U.EditorBox>
      <U.StyledLabel htmlFor="file">첨부파일</U.StyledLabel>
      <U.StyledInput {...register("file")} type="file" id="file" multiple />
      {currData && currData.post.files.length > 0 && (
        <U.FileList>
          {currData.post.files.map((file) => (
            <li key={file._id}>
              <span>
                {file.fileName.length > 20
                  ? file.fileName.substring(0, 10) +
                    "..." +
                    file.fileName.substring(file.fileName.length - 10)
                  : file.fileName}
              </span>
              <div>
                <input
                  id={file._id}
                  {...register("deleteFiles")}
                  type="checkbox"
                  value={file.fileName}
                />
                <label htmlFor={file._id}>삭제</label>
              </div>
            </li>
          ))}
        </U.FileList>
      )}
      <U.StyledBtn>수정</U.StyledBtn>
    </U.StyledForm>
  );
};

export default NoticeUpdate;
