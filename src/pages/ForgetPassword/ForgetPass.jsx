import React from "react";
import "./ForgetPass.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const ForgetPass = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
  });

  return (
    <div className="fPass">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const availableData = JSON.parse(
            localStorage.getItem("socialRegister")
          );
          console.log("available email ::", availableData.email);
          if (availableData.email === values.email) {
            alert("Link send to your given email");
            navigate("/");
          } else {
            alert("Your email is not registered");
          }
        }}
      >
        {(isSubmitting) => (
          <Form className="forgetContainer">
            <h2>Forget Password ?</h2>
            <Field
              type="email"
              name="email"
              className="inputField"
              placeholder="Enter Your Email"
            />
            <ErrorMessage name="email" component="div" className="errorMsg" />
            <Link to="/">Go to Login</Link>
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
