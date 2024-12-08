import React from "react";
import s from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const RegistrationForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const usernameFieldID = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters!")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter!")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter!")
      .matches(/[0-9]/, "Password must contain at least one number!")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@$!%*?&)"
      )
      .required("Required"),
  });

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={0}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <label htmlFor={usernameFieldID}>Username</label>
          <Field
            className={s.label}
            type="text"
            name="username"
            id={usernameFieldID}
          />
          <ErrorMessage name="username" component="span" />

          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={s.label}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="span" />

          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            className={s.label}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" component="span" />
          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
