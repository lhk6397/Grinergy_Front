import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as L from "../../styles/admin/login.styles";
import useMutation from "../../utils/useMutation";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login, { loading, data, error }] = useMutation(`/api/user/login`);
  const onValid = (validForm) => {
    if (loading) return;
    login(validForm);
  };

  useEffect(() => {
    if (data && data.ok) {
      window.localStorage.setItem("userId", data.userId);
      navigate("/admin");
    }
  }, [data, navigate]);

  useEffect(() => {
    if (error) alert(error.response.data.message);
  }, [error]);

  return (
    <L.Container>
      <L.StyledTitle>Login</L.StyledTitle>
      <L.StyledForm onSubmit={handleSubmit(onValid)}>
        <L.StyledLabel htmlFor="userId">User Id</L.StyledLabel>
        <L.StyledInput
          {...register("userId", { required: true })}
          type="text"
          id="userId"
        />
        <L.StyledLabel htmlFor="password">Password</L.StyledLabel>
        <L.StyledInput
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          id="password"
        />
        <L.StyledBtn type="submit" onClick={handleSubmit(onValid)}>
          <span>LOGIN</span>
        </L.StyledBtn>
      </L.StyledForm>
    </L.Container>
  );
};

export default AdminLogin;
