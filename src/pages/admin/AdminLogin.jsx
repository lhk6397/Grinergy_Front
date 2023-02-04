import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useMutation from "../../utils/useMutation";

const Container = styled.div`
  margin-top: 16.55vh;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  gap: 10px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 1.5625rem;
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
`;

const StyledBtn = styled.button`
  background: #000;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &::after {
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0px;
      left: 0px;
      background-color: #000;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
  }
`;

const AdminLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login, { loading, data }] = useMutation(
    `${process.env.REACT_APP_API_URL}/api/user/login`
  );
  const onValid = (validForm) => {
    if (loading) return;
    login(validForm);
  };

  useEffect(() => {
    if (data) {
      if (data?.ok) {
        window.localStorage.setItem("userId", data.userId);
        navigate("/admin");
      } else {
        alert("로그인 실패");
      }
    }
  }, [data, navigate]);

  return (
    <Container>
      <StyledTitle>Login</StyledTitle>
      <StyledForm onSubmit={handleSubmit(onValid)}>
        <StyledLabel htmlFor="userId">User Id</StyledLabel>
        <StyledInput
          {...register("userId", { required: true })}
          type="text"
          placeholder="User Id"
          id="userId"
        />
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          placeholder="password"
          id="password"
        />
        <StyledBtn>Login</StyledBtn>
      </StyledForm>
    </Container>
  );
};

export default AdminLogin;
