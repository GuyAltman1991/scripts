import React from "react";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm.js";
import loginSchema from "../models/joi-schema/loginSchema";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import Form from "../../forms/compnents/Form";
import Input from "../../forms/compnents/Input";

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate replace to={ROUTES.SCRIPTS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        title="login"
        styles={{ maxWidth: "450px" }}
        to={ROUTES.SCRIPTS}
      >
        <Input
          lable="email"
          name="email"
          type="email"
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          lable="password"
          name="password"
          type="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Container>
  );
};

export default LoginPage;
