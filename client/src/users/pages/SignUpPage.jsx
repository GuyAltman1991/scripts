import { Container } from "@mui/material";
import React from "react";
import Form from "../../forms/compnents/Form";
import Input from "../../forms/compnents/Input";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import initialSignUpForm from "../helpers/initialForms/initialSignUpForm";
import signupSchema from "../models/joi-schema/signupSchema";

const SignUpPage = () => {
  const { handleSignUp } = useUsers();
  const { value, ...rest } = useForm(
    initialSignUpForm,
    signupSchema,
    handleSignUp
  );

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
        title="signup"
        styles={{ maxWidth: "450px" }}
        to={ROUTES.SCRIPTS}
      >
        <Input
          type="text"
          lable="first name"
          name="firstName"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="text"
          lable="last name"
          name="lastName"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="text"
          lable="phone"
          name="phone"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          data={value.data}
          error={value.errors.email}
          onChange={rest.handleChange}
          type="email"
          required={true}
          lable="email"
          name="email"
        />
        <Input
          type="password"
          lable="password"
          name="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="text"
          lable="image"
          name="imageUrl"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Container>
  );
};

export default SignUpPage;
