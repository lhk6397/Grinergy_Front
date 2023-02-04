import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useMutation from "../../../utils/useMutation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledForm = styled.form`
  background-color: white;
  height: 85%;
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
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
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
`;

const StyledBtn = styled.button`
  background: ${(props) => props.theme.color.green};
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  &:hover {
    background: #fff;
    color: ${(props) => props.theme.color.green};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &::after {
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0px;
      left: 0px;
      background-color: ${(props) => props.theme.color.green};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
  }
`;

const PostCreate = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const [fileData, setFileData] = useState([]);
  const [uploadNotice, { loading, data }] = useMutation(
    `${process.env.REACT_APP_API_URL}/api/post`
  );
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
    withCredentials: true,
  };
  const { register, handleSubmit, watch } = useForm();

  const onValid = async ({ file, title, contents }) => {
    if (loading) return;
    if (file && file.length > 0) {
      for (let i = 0; i < file.length; i++) {
        formData.append("file", file[i]);
      }
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/post/uploadFiles`,
        formData,
        config
      );
      if (res.data.ok) {
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
        alert("게시글 등록에 실패하였습니다.");
      }
    }
  }, [data, navigate]);

  return (
    <StyledForm onSubmit={handleSubmit(onValid)}>
      <StyledLabel htmlFor="title">제목</StyledLabel>
      <StyledInput
        {...register("title", { required: true })}
        type="text"
        placeholder="title"
        id="title"
      />
      <StyledLabel htmlFor="contents">내용</StyledLabel>
      <StyledTextarea
        {...register("contents", { required: true })}
        placeholder="contents"
        id="contents"
      />
      <StyledLabel htmlFor="file">첨부파일</StyledLabel>
      <StyledInput {...register("file")} type="file" id="file" multiple />
      <StyledBtn>등록</StyledBtn>
    </StyledForm>
  );
};

export default PostCreate;

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const PostCreate = () => {
//   const onChangeContents = (contents) => {
//     console.log(contents);
//   };
//   return (
//     <div>
//       <ReactQuill onChange={onChangeContents} />
//     </div>
//   );
// };

// export default PostCreate;
