// import React from "react";
import s from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    username: "",
    email: "",
  };
  const usernameFieldID = useId();
  const emailFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={0}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={usernameFieldID}>Username</label>
        <Field type="text" name="username" id={usernameFieldID} />
        <ErrorMessage name="username" component="span" />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage name="email" component="span" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
