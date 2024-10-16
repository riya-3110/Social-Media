import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>
        <div className="loginRight">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const availableData = JSON.parse(
                localStorage.getItem("socialRegister")
              );
              console.log("available password is ::", availableData.password);
              console.log("available email is ::", availableData.email);

              if (
                availableData.email === values.email &&
                availableData.password === values.password
              ) {
                navigate("/");
              } else {
                alert("Your email or password Incorrect");
              }
              setSubmitting(false);
            }}
          >
            {(isSubmitting) => (
              <Form className="loginBox">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="loginInput"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="errorMsg"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="loginInput"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="errorMsg"
                />
                <button type="submit" className="loginButton">
                  Log In
                </button>
                <Link className="loginForgot" to="/forgetPassword">
                  Forgot Password?
                </Link>
                <button
                  className="loginRegisterButton"
                  onClick={() => navigate("/register")}
                >
                  Create a New Account
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
