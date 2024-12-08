import React from "react";
import s from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const usernameFieldID = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
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

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .then(() => {
        toast.success("Registration successful!");
        resetForm();
      })
      .catch(() => {
        toast.error("Registration failed. Please try again.");
      });
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
        autoComplete="off"
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label htmlFor={usernameFieldID}>Username</label>
            <Field
              className={`${s.label} ${
                touched.name && errors.name ? s["input-error"] : ""
              }`}
              type="text"
              name="name"
              id={usernameFieldID}
            />
            {touched.name && errors.name && (
              <ErrorMessage
                name="name"
                component="span"
                className={s["error-message"]}
              />
            )}

            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={`${s.label} ${
                touched.email && errors.email ? s["input-error"] : ""
              }`}
              type="email"
              name="email"
              id={emailFieldId}
            />
            {touched.email && errors.email && (
              <ErrorMessage
                name="email"
                component="span"
                className={s["error-message"]}
              />
            )}

            <label htmlFor={passwordFieldId}>Password</label>
            <div className={s.passwordWrapper}>
              <span
                className={s.passwordIcon}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <Field
                className={`${s.label} ${
                  touched.password && errors.password ? s["input-error"] : ""
                }`}
                type={showPassword ? "text" : "password"}
                name="password"
                id={passwordFieldId}
              />
            </div>
            {touched.password && errors.password && (
              <ErrorMessage
                name="password"
                component="span"
                className={s["error-message"]}
              />
            )}
            <button className={s.btn} type="submit">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
