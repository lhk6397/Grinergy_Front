import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useMutation from "../../../utils/useMutation";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import Editor from "../../../components/admin/Editor";

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

const FileList = styled.ul`
  background-color: #f7f7f7;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  margin-top: -10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
    padding: 5px;
    gap: 3px;
  }

  li {
    width: 10vw;
    display: flex;
    font-size: 0.75rem;
    justify-content: space-between;
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 100%;
    }
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

const PostUpdate = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data: currData } = useSWR(`/api/post/${postId}`);
  const [updateNotice, { loading, data }] = useMutation(`/api/post/${postId}`);
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
      const res = await axios.post(`/api/post/uploadFiles`, formData, config);
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
    <StyledForm onSubmit={handleSubmit(onValid)}>
      <StyledLabel htmlFor="title">제목</StyledLabel>
      <StyledInput
        {...register("title", { required: true })}
        type="text"
        id="title"
      />
      <StyledLabel htmlFor="contents">내용</StyledLabel>
      <EditorBox>
        <Editor
          value={currData && currData.post.contents}
          handleChange={handleChange}
          id="contents"
        />
      </EditorBox>
      <StyledLabel htmlFor="file">첨부파일</StyledLabel>
      <StyledInput {...register("file")} type="file" id="file" multiple />
      {currData && currData.post.files.length > 0 && (
        <FileList>
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
        </FileList>
      )}
      <StyledBtn>수정</StyledBtn>
    </StyledForm>
  );
};

export default PostUpdate;
