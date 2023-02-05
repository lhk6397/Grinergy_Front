import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useMutation from "../../../utils/useMutation";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

const Container = styled(motion.div)`
  margin-top: 16.55vh;
  width: 100%;
`;

const StyledForm = styled.form`
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 50vw;
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
  height: 150px;
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

// const StyledError = styled.span`
//   margin: 0.5rem 0;
//   color: red;
//   font-family: ${(props) => props.theme.font.kr.medium};
//   display: block;
//   text-align: center;
// `;

const PostUpdate = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data: currData } = useSWR(`/api/post/${postId}`);
  const [updateNotice, { loading, data }] = useMutation(`/api/post/${postId}`);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (currData?.post?.title) setValue("title", currData.post.title);
    if (currData?.post?.title) setValue("contents", currData.post.contents);
  }, [currData, setValue]);

  const onValid = ({ file, title, contents }) => {
    if (loading) return;
    // if (currData.post.title === title && currData.post.contents === contents) {
    //   console.log("1");
    //   return setError("formErrors", {
    //     message: "제목 또는 내용을 수정해야합니다.",
    //   });
    // }
    // if (file && file.length > 0) {
    //   const form = new FormData();
    //   form.append("file", file[0]);
    //   // file update fetch
    //   updateNotice({ file, title, contents });
    // }
    // console.log("update");
    updateNotice({ title, contents });
  };

  useEffect(() => {
    if (data) {
      if (data.ok) {
        navigate(`/post/${postId}`);
      } else {
        alert("게시글 수정에 실패하였습니다.");
      }
    }
  }, [data, navigate, postId]);

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onValid)}>
        <StyledLabel htmlFor="title">TItle</StyledLabel>
        <StyledInput
          {...register("title", { required: true })}
          type="text"
          placeholder="title"
          id="title"
        />
        <StyledLabel htmlFor="contents">Contents</StyledLabel>
        <StyledTextarea
          {...register("contents", { required: true })}
          placeholder="contents"
          id="contents"
        />
        {/* <StyledLabel htmlFor="file">File</StyledLabel>
        <StyledInput {...register("file")} type="file" id="file" /> */}
        {/* {errors.formErrors && (
          <StyledError>{errors.formErrors.message}</StyledError>
        )} */}
        <StyledBtn>Submit</StyledBtn>
      </StyledForm>
    </Container>
  );
};

export default PostUpdate;
