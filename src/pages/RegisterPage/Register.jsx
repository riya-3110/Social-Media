import "./Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export const Register = () => {
  const navigate = useNavigate();
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(2, "username in at least more than 2 character"),
    email: Yup.string().required("Email is required").email("Invalid formate"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
    cPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Password does not match"),
  });

  return (
    <div className="signUp">
      <div className="signUpWrapper">
        <div className="signUpLeft">
          <h3 className="signUpLogo">Social Media</h3>
          <span className="signUpDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>
        <div className="signUpRight">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              cPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              localStorage.setItem("socialRegister", JSON.stringify(values));
              alert("You can login now :)");
              setSubmitting(false);
              navigate("/");
            }}
          >
            {({ isSubmitting }) => (
              <Form className="signUpBox">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="signUpInput"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="errorMsg"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="signUpInput"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="errorMsg"
                />
                <Field
                  type={isPasswordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="signUpInput"
                />
                {isPasswordShown ? (
                  <VscEye
                    className="icon"
                    onClick={() =>
                      setIsPasswordShown((prevState) => !prevState)
                    }
                  />
                ) : (
                  <VscEyeClosed
                    className="icon"
                    onClick={() =>
                      setIsPasswordShown((prevState) => !prevState)
                    }
                  />
                )}

                <ErrorMessage
                  name="password"
                  component="div"
                  className="errorMsg"
                />
                <Field
                  type="password"
                  name="cPassword"
                  placeholder="Confirm Password"
                  className="signUpInput"
                />
                <ErrorMessage
                  name="cPassword"
                  component="div"
                  className="errorMsg"
                />
                <button type="submit" className="signUpButton">
                  Register
                </button>
                <Link to="/">Already have an account?</Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
