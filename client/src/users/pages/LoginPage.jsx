import React, { useEffect, useState } from "react";
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
import jwtDecode from "jwt-decode";
import googleOneTap from "google-one-tap";

const options = {
  client_id: process.env.REACT_APP_GOOGLE_ID,
  auto_select: false,
  cancel_on_top_outside: false,
  context: "signin",
};

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin, handleLoginWithGoogle } = useUsers();

  // google login //
  // const [loginData, setLoginData] = useState(
  //   localStorage.getItem("loginData")
  //     ? JSON.parse(localStorage.getItem("loginData"))
  //     : null
  // );

  // useEffect(() => {
  //   if (!loginData) {
  //     googleOneTap(options, async (response) => {
  //       console.log(response);
  //       const res = await fetch("/api/google-login", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           token: response.credential,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await res.json();
  //       setLoginData(data);
  //       localStorage.setItem("loginData", JSON.stringify(data));
  //     });
  //   }
  // }, []);

  // const handleLogOut = () => {
  //   localStorage.removeItem("loginData");
  //   setLoginData(null);
  // };

  // google login//
  // google login//

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token : " + response.credential);
    let idToken = response.client_id;
    // .getAuthResponse().idToken;
    console.log(idToken);

    // handleLoginWithGoogle(token);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "943847963220-ih8q55sbetb7t258kn4k8ep32ce4crrs.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("sinInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  // google login//

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
        {/* // google login//  */}
        <div id="sinInDiv"></div>
        {/* // google login//  */}

        {/* // google login//  */}
        {/* <div>
          {loginData ? (
            <div>
              <h3>
                you "{loginData.name}" loged, your email is {loginData.email}
              </h3>{" "}
              <button onClick={handleLogOut}>LogOut</button>
            </div>
          ) : (
            <div>not loged</div>
          )}
        </div> */}
        {/* // google login//  */}
        <Input
          lable="email"
          name="email"
          type="email"
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="password"
          lable="password"
          name="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Container>
  );
};

export default LoginPage;
