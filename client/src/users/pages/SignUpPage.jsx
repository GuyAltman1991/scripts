import { Container } from "@mui/material";
import React from "react";
import Form from "../../forms/compnents/Form";
import Input from "../../forms/compnents/Input";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import initialSignUpForm from "../helpers/initialForms/initialSignUpForm";
import signupSchema from "../models/joi-schema/signupSchema";
import "react-phone-number-input/style.css";
import ReactPhone from "../helpers/reactPhone/ReactPhone";
import ImageUpload from "../helpers/ImageUpload";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
  const { handleSignUp } = useUsers();
  const { value, ...rest } = useForm(
    initialSignUpForm,
    signupSchema,
    handleSignUp
  );

  const { user } = useUser();
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

        {/* <ReactPhone onChange={rest.handleChange} data={value.data} /> */}

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
          type="phone"
          lable="phone"
          name="phone"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="text"
          lable="imageUrl"
          name="imageUrl"
          error={value.errors.imageUrl}
          onChange={rest.handleChange}
          data={value.data}
        />
        {/* 
        <ImageUpload
          onChange={rest.handleChange}
          data={value.data}
          name="imageUrl"
          imageUrl={value.data.imageUrl}
          error={value.errors.image}
        /> */}
      </Form>
    </Container>
  );
};

export default SignUpPage;
